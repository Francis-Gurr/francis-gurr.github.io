import profilePicture from '@/assets/profile-picture.jpg'
import { ContactForm } from '@/components/ContactForm/ContactForm'
import { ExternalLink } from '@/components/ExternalLink/ExternalLink'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  GithubIcon,
  HandIcon,
  LinkedinIcon,
  MailIcon,
  SmileIcon,
} from 'lucide-react'

const Home: React.FC = () => {
  return (
    <div className="gap-16 flex">
      <div>
        <Avatar className='shadow-shadow mb-8 h-48 w-48'>
          <AvatarImage src={profilePicture} />
          <AvatarFallback><SmileIcon className='h-32 w-32' /></AvatarFallback>
        </Avatar>
        <div className='flex gap-4 w-full justify-center'>
          <ContactForm>
            <Button><MailIcon /></Button>
          </ContactForm>
          <a href="https://www.linkedin.com/in/francis-gurr/"><Button><LinkedinIcon /></Button></a>
          <a href="https://github.com/Francis-Gurr"><Button><GithubIcon /></Button></a>
        </div>
      </div>
      <Card className="grow bg-bg">
        <CardHeader className='py-4'>
          <CardTitle className='flex gap-2 text-2xl items-center'>Hi, I'm Francis! <HandIcon className='size-5 animate-wave' /></CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-2'>
            <p>
              I write code for a living as a <strong>Senior Software Engineer at <ExternalLink href="https://www.pendo.io/" newTab={true}>Pendo</ExternalLink></strong>, but honestly, I just love building things—whether that’s software, a new self-hosted service on my home server, or a side project that may or may not ever get finished. Open-source is my jam, and if there’s a FOSS alternative, you can bet I’m using it.
            </p>
            <p>
              When I’m not sat at my computer, you’ll find me climbing, cycling, skiing, hiking, scrambling, or doing basically anything outdoors. I love forests and mountains, and being active outside is pretty much my favourite thing.
            </p>
            <p>
              Sometimes I play video games, sometimes I slackline or juggle, and sometimes I ride a mountain unicycle just to keep things interesting. I also enjoy arts and crafts and want to get back into sewing.
            </p>
            <p>
              I’m also vegan (because animals are awesome), and my favourite colour is yellow. No deep reason—it's just the best colour.
            </p>
            <p>
              This site is just a little space to share who I am, some projects I actually finished, and the occasional blog post—probably about FOSS, self-hosting, or something niche like how to use Beancount. We’ll see.
            </p>
          </div>
        </CardContent>
      </Card>
    </div >
  )
}

export { Home }
