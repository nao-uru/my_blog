import {DiscussionEmbed} from "disqus-react"

export const DisqusComments = ( props ) => {
  const disqusShortname = "HELLO!"
  const disqusConfig = {
    url: `https://www.naosjournal.com/${props.slug}`,
    identifier: props.id, // Single post id
    title: props.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
