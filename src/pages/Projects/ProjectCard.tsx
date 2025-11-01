import { ExternalLink } from '@/components/ExternalLink/ExternalLink';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

type ProjectCardProps = {
    title: string,
    type: string,
    description: string,
    tags: string[],
    externalLink?: {
        href: string,
        text: string
    },
    onClick: React.MouseEventHandler,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, type, description, tags, externalLink, onClick }) => {
    return (
        <Card className="bg-white max-w-md">
            <CardHeader>
                <div className='flex flex-col gap-2'>
                    <p className='text-sm text-neutral-800'>{type}</p>
                    <CardTitle className='leading-6'>{title}</CardTitle>
                    <div className='flex flex-wrap gap-1'>
                        {tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                        ))}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className='mb-4 text-sm'>
                    {description}
                </div>
                <div className='flex justify-between gap-8'>
                    {externalLink && <ExternalLink href={externalLink.href} newTab={true}>{externalLink.text}</ExternalLink>}
                    <Button onClick={onClick}>Learn more</Button>
                </div>
            </CardContent>
        </Card >
    )
}

export { ProjectCard }
