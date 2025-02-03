import { cva, type VariantProps } from 'class-variance-authority'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { AlertTriangle, CheckIcon } from 'lucide-react'

const alertVariants = cva(
  'fixed top-4 right-4 max-w-md ml-4 p-4 flex gap-4 rounded-base shadow-shadow font-heading border-2 border-border transition-opacity duration-200 z-[100]',
  {
    variants: {
      variant: {
        default: 'bg-teal-400',
        error: 'bg-red-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants> & {
    visible: boolean;
    setVisible: (visible: boolean) => void;
  }
>(({ className, variant, visible, setVisible, ...props }, ref) => {
  const [fading, setFading] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null)

  React.useEffect(() => {
    if (visible) {
      const transitionDuration = 200;

      setFading(true);
      setTimeout(() => setFading(false), transitionDuration)

      timeoutRef.current = setTimeout(() => {
        setFading(true);
        setTimeout(() => setVisible(false), transitionDuration);
      }, 5000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className, fading ? 'opacity-0' : 'opacity-100')}
      {...props}
    >
      {variant === 'error' ? <AlertTriangle className='shrink-0' /> : <CheckIcon className='shrink-0' />}
      <div>
        {props.children}
      </div>
    </div>
  )
})
Alert.displayName = 'Alert'

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 leading-none tracking-tight', className)}
    {...props}
  />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm font-base [&_p]:leading-relaxed', className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertDescription, AlertTitle }

