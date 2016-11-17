// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  hackerHoodie: require("../assets/hacker-hacking-dark-hoodie.jpg"),
  epicDance: require("../assets/epic-smiley-dance.gif"),
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Security
            </Heading>
            <Appear fid={1}>
              <Heading size={1} fit caps>
                SQL Injection
              </Heading>
            </Appear>
            <Appear fid={2}>
              <Heading size={1} fit caps textColor="black">
                XSS - Cross Site Scripting
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Image src={images.hackerHoodie.replace("/", "")} margin="0px auto 40px" height="500px"/>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading>SQLi - SQL Injection</Heading>
            <List>
              <Appear><ListItem>What is SQLi?</ListItem></Appear>
              <Appear><ListItem>It's 2016! Is this still a thing??</ListItem></Appear>
              <Appear><ListItem>How do we guard against it?</ListItem></Appear>
              <Appear><ListItem><Image src={images.epicDance.replace("/", "")} margin="0px auto 40px" height="280px" /></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading>What is SQLi?</Heading>
            <BlockQuote><Quote>Allowing execution of arbitrary SQL through unfiltered user input</Quote><Cite></Cite></BlockQuote>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading>Is this still a thing?</Heading>
            <List>
              <Appear>
                <ListItem>
                  <a href="https://www.thequint.com/blogs/2016/11/08/indian-embassy-hacks-global-hackers-community-kapustkiy-kasimierz-l">
                    Indian Embassy Hacks - November
                  </a>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <a href="http://www.azfamily.com/story/32945105/hack-that-targeted-arizona-voter-database-was-easy-to-prevent-expert-says">
                    Arizona Voter Registration Database - September
                  </a>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <a href="http://www.eweek.com/security/hacking-of-ubuntu-linux-forums-lessons-learned.html">
                    Ubuntu Forums of 2 million usernames - July
                  </a>
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  <Heading>YES!</Heading>
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="sql"
              margin="20px auto"
            >
              "); select * from users; -- lulz
            </CodePane>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
