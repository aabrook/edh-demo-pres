import React from 'react'
import { List, ListItem } from "spectacle";

export default ({ posts }) => {
  console.log({ posts })
  return (<List>
    {posts && posts.map((c, i) =>
      <ListItem key={i}>
        {c.title}
      </ListItem>
      )}
  </List>)
}
