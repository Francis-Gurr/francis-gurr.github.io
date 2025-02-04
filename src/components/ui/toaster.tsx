import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import { AlertTriangleIcon, FrownIcon, PartyPopperIcon, SmileIcon } from "lucide-react"

// interface ErrorToastProps {
//   id: string,
//   description: string
// }

// const ErrorToast = React.FC<ErrorToastProps> = ({ id, description, ...props }) => {
//   return (
//     <Toast key={id} {...props}>
//       <AlertTriangleIcon />
//       <ToastTitle>Error</ToastTitle>
//       <ToastDescription>{description}</ToastDescription>
//       <ToastClose />
//     </Toast>
//   )
// }

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function({ id, title, description, action, variant, ...props }) {
        if (variant === 'success') {
          return (
            <Toast key={id} variant={variant} {...props} className="justify-normal">
              <SmileIcon className="shrink-0" />
              <div className="grid gap-1">
                <ToastTitle>{title}</ToastTitle>
                <ToastDescription>{description}</ToastDescription>
              </div>
              <ToastClose />
            </Toast>
          )
        }

        if (variant === 'error') {
          return (
            <Toast key={id} variant={variant} {...props} className="justify-normal">
              <FrownIcon className="shrink-0" />
              <div className="grid gap-1">
                <ToastTitle>Error!</ToastTitle>
                <ToastDescription>{description}</ToastDescription>
              </div>
              <ToastClose />
            </Toast>
          )
        }

        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
// <Alert visible={isSuccessAlertVisible} setVisible={setIsSuccessAlertVisible}>
//   <AlertTitle>Sent</AlertTitle>
//   <AlertDescription>
//     Message sent successfully, I'll get back to you soon!
//   </AlertDescription>
// </Alert>
