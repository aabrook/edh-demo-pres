// Import React
import React from "react";
import axios from 'axios'

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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  hackerHoodie: require("../assets/hacker-hacking-dark-hoodie.jpg"),
  bobbyTables: require("../assets/bobbyTables.png"),
  epicDance: require("../assets/wow.gif"),
  mindBlown: require("../assets/mindBlown.gif"),
  explosion: require("../assets/explosion.jpg"),
  micDrop: require("../assets/micDrop.gif"),
  yay: require("../assets/yay.gif"),
  sad: require("../assets/sad.gif")
}

const codeExample = {
  escapeRb: require('raw!../assets/escape.example'),
  paramterized: require('raw!../assets/parameters.example')
}
preloader(images);

const theme = createTheme({
  primary: "#0DA74E"
});

export default class Presentation extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Security
            </Heading>
            <Heading size={1} fit caps>
              SQL Injection
            </Heading>
            <Heading size={1} fit caps textColor="black">
              XSS - Cross Site Scripting
            </Heading>
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
            </List>
            <Appear><Image src={images.epicDance.replace("/", "")} margin="0px auto 40px" height="280px" /></Appear>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading>What is SQLi?</Heading>
            <BlockQuote style={{borderLeft: "1px solid #203A44"}}><Quote style={{color: "white"}}>Allowing execution of arbitrary SQL through unfiltered user input</Quote></BlockQuote>
          </Slide>
          <Slide transition={["slide"]}>
            <Image src={images.bobbyTables.replace("/", "")} margin="0px auto 40px" height="300px" />
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
              "; select * from posts; -- lulz
            </CodePane>
            <Heading>
              <Appear><a href='http://localhost:1338/api/user?username="; select * from posts; -- lulz'>Show some lulz</a></Appear>
            </Heading>
            <Appear><Image src={images.mindBlown.replace("/", "")} margin="40px auto 40px" height="300px"/></Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading>Bad example is bad</Heading>
            <Heading><a href="http://localhost:1338/users">App</a></Heading>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading fit>How do we guard against it?</Heading>
            <List>
              <ListItem>ORM</ListItem>
              <ListItem>Query parameters</ListItem>
              <ListItem>Keep systems up to date</ListItem>
              <ListItem>Keep gems/modules up to date</ListItem>
              <Appear><ListItem>Escape</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading>Parameterized</Heading>
            <CodePane lang="javascript" margin="20px auto" source={codeExample.paramterized} />
          </Slide>
          <Slide transition={["fade"]}>
            <Image src={images.yay.replace("/", "")} margin="0px auto 40px" height="500px"/>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading>Escape Example</Heading>
            <CodePane
              lang="ruby"
              margin="20px auto"
              source={codeExample.escapeRb}
            />
          </Slide>
          <Slide transition={["fade"]}>
            <Image src={images.sad.replace("/", "")} margin="0px auto 40px" height="500px"/>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading fit>XSS - Cross Site Scripting</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading>What is XSS?</Heading>
            <BlockQuote style={{borderLeft: "1px solid #203A44"}}>
              <Quote style={{color: "white", fontSize: "48px"}}>
                Cross-site scripting (XSS) is a type of computer security vulnerability typically found in web applications. XSS enables attackers to inject client-side scripts into web pages viewed by other users
              </Quote>
            </BlockQuote>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading>Types of XSS</Heading>
            <List>
              <ListItem>Reflected</ListItem>
              <ListItem>Persisted</ListItem>
            </List>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading>Reflected</Heading>
            <CodePane type="javascript">http://some_url.com/q=?&lt;script&gt;alert('boom')&lt;script&gt;</CodePane>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading>Persisted</Heading>
            <CodePane type="javascript">
              &lt;script&gt;
                document.write(&apos;&lt;body&gt;&lt;h1&gt;Haxored!&lt;/h1&gt;&lt;/body&gt;&apos;)
              &lt;/script&gt;
            </CodePane>
            <CodePane type="javascript">
              &lt;script&gt;
              window.location = 'http://download-my-game-plz.com'
              &lt;/script&gt;
            </CodePane>
            <Appear>
              <CodePane type="javascript">
              &lt;script&gt;
              alert(&apos;lulz BOOM!&apos;)
              &lt;/script&gt;
              </CodePane>
            </Appear>
          </Slide>
          <Slide transition={["slide"]}>
            <Image src={images.explosion.replace("/", "")} margin="0px auto 40px" height="500px"/>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading fit>How do we stop it?</Heading>
            <List>
              <ListItem>Escape all the things!</ListItem>
            </List>
            <p style={{textAlign: "left"}}>
              In react, don't use __dangerouslySetInnerHtml unless you have escaped required tags.
            </p>
            <p style={{textAlign: "left"}}>
              In ERB don't html_safe and raw() unless you have escaped all the things.
            </p>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading fit>Escaping all the things still fails</Heading>
            <p><a href="http://namb.la/popular/tech.html">MySpace XSS Worm</a></p>
            <Appear><p>2005? I feel so old</p></Appear>
          </Slide>
          <Slide transition={["slide"]}>
            <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">But how is that possible? Aren&#39;t attackers cyber ninjas with zero days you need super firewalls and an office of security people to stop?</p>
            </blockquote>
            <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">No, most &quot;attacks&quot; are incredibly stupid, send an email to 50,000 companies with a .wsf file attached that downloads an EXE from Moldova</p>&mdash; SwiftOnSecurity (@SwiftOnSecurity) <a href="https://twitter.com/SwiftOnSecurity/status/800037626145173504">November 19, 2016</a></blockquote>
          </Slide>
          <Slide transition={["slide"]}>
            <Heading fit>Questions? Answers?</Heading>
            <p><a href="http://edh.getitdn.com/users">http://edh.getitdn.com/users - Shitty App is Shitty</a></p>
          </Slide>
          <Slide transition={["slide"]}>
            <Image src={images.micDrop.replace("/", "")} margin="0px auto 40px" height="500px"/>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
