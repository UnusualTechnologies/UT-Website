---
title: "AI Tools"
type: "projects"
project_type: "Prototype"
tags:
  - "ai"
  - "productivity"
prominence: 10
featured_image: "/images/projects/ai-tools.webp"
banner_image: "/images/projects/banners/ai-tools.webp"

overview: "These are some of our findings and thoughts on creatively using AI tools such as ChatGPT and DALL·E 3, after utilising them across several projects."

technologies: ["AI", "ChatGPT", "DALL·E3"]

overview_image:
  src: "/images/projects/AI_ProjectCard.webp"
---

## Image Generation with DALL·E 3

We experimented with AI image generation to create illustrations, accompanied by questions for enhanced readability. For instance, a question like "Have you had a fall recently?" could be illustrated with a person slipping over. However, challenges arose in illustrating abstract questions like "Are you satisfied with your life?"

Our tool of choice, DALL · E3, produced visually appealing outputs, but they often fell short of effectively complementing the associated questions.

You can see some outputs below:

<div class="gallery gallery-2col">

![](/images/projects/AI_Tools_SlippingOver.webp)

![](/images/projects/AI_Tools_Satified.webp)

</div>

One of the main issues we found is that although the output might look graphically pleasing, it was not complimenting the question well enough.

Some of this will come down to the prompt that was used to generate the image. There is an art to making good prompts and the more detailed the prompt is the closer a match the output should be.

For example, instead of asking for an image of "someone falling over", the prompt should include information like art style, age and look of the person, colours used, backdrop etc.

To help with this we asked ChatGPT to describe in detail an illustration that would be a good accompaniment to the question. The process identified other areas of detail that could be used to describe the image.

However, there was a problem with consistency. Ensuring a consistent style across over 50 illustrations proved to be too much to ask. This comes naturally if all the images are created by one artist.

The AI image creation tool showcased potential for generating ideas and quick concepts—ideal for brainstorming or initial discussions with artists. Or if you don't need to worry about consistency. A good example is the project card for this page, which was created with AI.

Here are some other outputs that we tried for depicting AI.

<div class="gallery gallery-2col">

![](/images/projects/AI_Image_2.webp)

![](/images/projects/AI_Image_3.webp)

</div>

## AI Voice Overs

One of the great applications of AI that we have discovered is voice generation. This technology has been around for a long time, allowing your PC to read out text. You might recall playing with Microsoft Sam on Windows XP. However, as you can hear from the voice clip below, things have improved significantly since then.

{{< audio src="/audio/projects/MicrosoftSamTTS.mp3" >}}

{{< audio src="/audio/projects/AI_Tools_TTSSection.mp3" >}}

We have found that the best online TTS service at the moment is [elevenlabs](https://elevenlabs.io/), which uses AI and Deep Learning to create very realistic speech synthesis. It offers a wide range of voice types, including an option to train one's own voice model using a recording of yourself.

{{< audio src="/audio/projects/Victoria.mp3" >}}

{{< audio src="/audio/projects/Oswald.mp3" >}}

We used this during the early development of our CoCog app. We wanted questions to be read out for better accessibility, and as the questions were constantly changing during development, it was very convenient to rely on AI to assist us. They even tricked our testers who did not realise they were generated.

However, there are still some drawbacks. The style in which the generated speech reads the text can sometimes differ from your desired style. For instance, it could say the sentence and sound too assertive/relaxed or perhaps stress the wrong words. But, this can sometimes be solved by simply generating the same output again as the reading varies every time. The fact that it can reproduce different talking styles is impressive compared to the dull robot-sounding voices of old.

## Voice Recognition

AI has also had a huge impact on the performance of speech recognition. Before the emergence of deep learning and neural networks, speech recognition systems depended on pattern matching and rule-based methods. These had difficulties in many situations, such as accent and pronunciation. The household voice recognition you will be familiar with, such as Alexa and Siri, use the more advanced AI versions which can learn to adapt to your accent.

For app development, OpenAI has made its impressive voice recognition '[Whisper](https://openai.com/research/whisper)' available for developers to use. It only supports English for now, but it is very advanced and would allow robust speech recognition to be added to projects, including Unity, as many have already ported the open-source code.

## Filling Out Forms

We spent the summer trying to better utilise ChatGPT, especially for the less exciting jobs like application and grant writing. We tried giving the AI an application and letting it generate our response, but the output was too generic and did not showcase our strengths. We then decided to feed ChatGPT with relevant company information, such as past projects, to get more unique answers based on Unusual Technologies. This worked better, but it still needed editing and was not much faster than writing it ourselves. The ideal solution would be to feed the AI everything about our company and have it remember that information so it can choose what it needs for future applications. This would be possible if we could train the model ourselves, but we did not have access to that in the early stages of summer 2023.

Prompt engineering is the technique of instructing ChatGPT how to answer, what to include/exclude, and other constraints. You can only tell it so much in one text input, but you can somewhat overcome this by having a conversation with it over a few inputs. This is not perfect, as it tends to forget. Note, this is only a problem with the large amounts of information we wanted to give about our company.

Fine-tuning gives better results than prompt engineering, as it works on a deeper level and allows for more examples that can fit in a prompt. We started using this along with a novel system that stored our data in levels of detail. For instance, we would tell it that we have AI, VR, and AR projects, but not the specifics. If it had to answer a question on VR, it would access that folder of information and learn it all before answering the question. This way, we bypassed the data limits.

The project was put on hold with the announcement of "GPT's". These will enable a no-code solution to training GPT's that will suit our needs well. The project was nevertheless a very valuable endeavour, making us pioneers in knowledge and expertise for this exciting new generation of AI.

## Assistant

A lot of people with digital careers will be used to asking Google for help. Perhaps how to perform a certain action in software you are using or getting technical information about different products.

We found that using ChatGPT can lead to a better experience than using Google on its own. For example, if you needed to find the aspect ratios of 5 specific iPhone models. You could use Google to help you find the correct specification pages for each phone, or you might get lucky and find a site that already has a list which includes this information.

ChatGPT on the other hand is very adept at using the large knowledge base and creating the list for you, even if it doesn't exist on any websites in a single list. What would previously be many Google searchers and going into tech specs manually, becomes one ChatGPT prompt that creates a nicely formatted list for you in seconds.

However, it's crucial to note that information from large language models has a cutoff point, limiting its real-time relevance. For instance, at the time of writing, ChatGPT did not know the iPhone 15 even existed.

Other time-consuming tasks like proofreading or copy editing can be aided with AI. Perhaps you wondered about this already, but some of this content got fed into ChatGPT with the goal of improving the writing. None of the full interpretations it created were very good. However, some snippets were good enough to make the cut. Can you spot them?

## Key Takeaways

- Prompts are everything: The effectiveness of AI output hinges on well-crafted prompts. Crafting detailed prompts is a learned skill that takes a lot of trial and error.
- AI for Time-Consuming Tasks: AI proves invaluable for streamlining time-consuming tasks that are relatively straightforward. Efficient use of AI can enhance productivity.
- Artistic Expertise Matters: While image generation tools are valuable, a skilled artist remains essential for achieving accurate and consistent results, particularly when visual cohesion is needed.
- Voice generation is now very convincing and easy to use/integrate.

## What's Next?

The discussion around Artificial General Intelligence (AGI) is ongoing, with uncertainties about its impact on our world. As we navigate these technological advancements, it's essential to stay informed and adapt to emerging trends. We don't currently know how this will shape our world, but here is Dall.E3's take on it!

![](/images/projects/AI_Image_1-768x768.webp)
