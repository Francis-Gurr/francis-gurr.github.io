type Props = {
  imageUrl: string
  caption?: string
}

export default function ImageCard({ imageUrl, caption }: Props) {
  return (
    <figure className="h-fit w-[250px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow">
      <img className="w-full" src={imageUrl} alt="image" />
      {caption &&
        <figcaption className="border-t-2 text-mtext border-border p-4">
          {caption}
        </figcaption>
      }
    </figure>
  )
}
