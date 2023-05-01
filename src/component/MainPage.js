import { Box,  Image,  Center, Container,  Text, Title,  createStyles } from '@mantine/core'
import React, { useEffect } from 'react'
import p2 from "./assets/p2.jpg"
import zaiba from "./assets/zaiba.jpeg"
import AOS from 'aos';
import 'aos/dist/aos.css';


const useStyle = createStyles((theme) => ({
  imageProfile: {


    "@media(max-width : 768px)": {
      // height: "150px",
      // display:"none",
      size: "150px"

    }

  },

  demoButton: {
    background: "#37B24D", textDecoration: "none", borderRadius: "5px",
    transition: "all 0.4s ease-in-out",
    border: "1px solid transparent ",
    "&:hover": {
      background: "transparent",
      border: "1px solid #37B24D",
      color: "#fff"
    },
  }

}))
export default function MainPage() {
  const { classes } = useStyle()
  useEffect(() => {
    AOS.init({
      duration: 2000, 
            offset: 200,
      easing: 'ease-in-out', 
      delay: 400, 
      once: true 
    });
  }, []);

  return (
    <>
      <Box pt={50} id='/' style={{
        // height: "100vh",
        background: "#191919"
      }}>
        <Box >
          <Container size="80%" data-aos="fade-up" >
            <Center>
              <Title order={2} data-aos="fade-up" >Hello!</Title>
            </Center>
            <Center>
              <Title order={1}>I am, <span style={{ color: "#37B24D" }} data-aos="fade-up" >Zoya Alam</span></Title>
            </Center>
            <Center>
              <Box mt="sm" data-aos="fade-up"  p={20} sx={(theme)=>({
                borderLeft:"3px solid #37B24D",
                borderRight:"3px solid #37B24D",
                // background :"red",
              })}>
                <Image className={classes.imageProfile} maw={240} mx="auto" radius="md" src={zaiba} alt="Random image" />
              </Box>
            </Center>
            <Center mt="lg" >
              <Text data-aos="fade-up"  style={{ textAlign: "justify" }} >I am an out of the box thinker with substantial skills in various fields. With an avid interest in web development since my college started, I have now learned various technologies, frameworks, and tools. I constantly challenge myself to develop new ideas. My strong communication skills and leadership abilities have allowed me to take on new endeavours and succeed. I am a girl with a plan of attack and always focus on the upshot rather than the problem.</Text>
            </Center>
            <Center mt="lg">

              <Center p={15} mt={20} className={classes.demoButton} data-aos="fade-up" >
                <a href="https://github.com/rajtechz" style={{ textDecoration: "none", color: "#fff" }}>Know More </a>
              </Center>
            </Center>
          </Container>
        </Box>
      </Box>
    </>
  )
}
