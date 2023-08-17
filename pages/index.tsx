import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

// Components
import { GradientBackgroundCon, BackgroundImage1, BackgroundImage2, FooterCon, RedSpan, FooterLink, QuoteGeneratorCon, QuoteGenerratorInnerCon, QuoteGeneratorTitle, QuoteGeneratorSubTitle, GenerateQuoteButton, GenerateQuoteButtonText } from '@/components/QuoteGenerator/QuoteGeneratorElements'

// Assets
import Clouds1 from '@/assets/cloud-and-thunder.png'
import Clouds2 from '@/assets/cloudy-weather.png'
import { useState } from 'react'

export default function Home() {
    const [numberOfQutes, setNumberOfQutes] = useState<Number | null>(0);

  return (
    <>
      <Head>
        <title>Insipirational Quote Generator</title>
        <meta name="description" content="Fun project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background */}
      <GradientBackgroundCon>

      {/* Quote Generator Modal Pop-up*/}
      {/* <QuoteGeneratorModal
      /> */}
      
      {/* Quote Generator */}
      <QuoteGeneratorCon>
        <QuoteGenerratorInnerCon>
          <QuoteGeneratorTitle>
              Daily Inspiration Generator
          </QuoteGeneratorTitle>
          <QuoteGeneratorSubTitle>
          Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes API</FooterLink>
          </QuoteGeneratorSubTitle>

        <GenerateQuoteButton>
          <GenerateQuoteButtonText>
            Make a Quote
          </GenerateQuoteButtonText>
        </GenerateQuoteButton>

        </QuoteGenerratorInnerCon>
      </QuoteGeneratorCon>

      

      {/* Background Images */}
        <BackgroundImage1
          src={Clouds1}
          height="300"
          alt="cloudybackground1"
        />

        <BackgroundImage2
          src={Clouds2}
          height="300"
          alt="cloudybackground1"
        />

      {/* Footer */}
        <FooterCon>
          <>
            Quotes Generated: {numberOfQutes}
            <br />
            Developed with <RedSpan>♥</RedSpan> by <FooterLink href="https://github.com/LuisSilveiraALX" target="_blank" rel="noopener noreferrer"> @LuisSilveiraAlx</FooterLink>
          </>
        </FooterCon>

      </GradientBackgroundCon>
    </>
  )
}
