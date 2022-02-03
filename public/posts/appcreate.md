## Two birds in one stone

It was the first weekend after new year 2022. I was in front of my PC, on LinkedIn, tallying up the experiences I'd had at work for the past year. 

I had worked at Synergy BIS tackling devops and fullstack development tasks for two months, started an LLC to do freelance web development, and worked as a full stack developer at Angelic Shipping.

As I added my experiences line by line to the LinkedIn description box for each role, I thought to myself: "There's a lot of similar projects I've worked on across companies. It would be good if I could 'tag' each experience".

I wanted a way to quickly review the skills I'd gained in one role, and locate any projects associated with them across companies. Could I create a web app to help with this? 

I'd create models and a frontend for
- Roles, like Devops and Fullstack
- Skills, like Kubernetes, Docker, Nodejs etc. 

I'd associate Roles with Skills. This would allow users who visited the site to view the skills, experiences and projects associated with one role using a filter.

A couple days later, while I was still in the process on finalizing the tech stack I wanted to use, I received an email from Marc Wilson, from PC & Network Downloads.

Marc had stumbled on my old personal [portfolio site](https://www.roshan.page/static/career.html) that I hadn't updated in over two years. I had linked to various different sites describing linux commands, but he reached out to recommend their comprehensive Linux commands "cheat sheet" - https://www.pcwdld.com/linux-commands-cheat-sheet. 

This was a quick reference to Linux commands to help someone get started with the operating system which I actually found was better than the individual links I'd added. Their cheat sheet includes commands and descriptions for things like networking, file permissions, process management, etc. in one spot.

Thanks to this reminder, I now knew where my new app was going to live. I was going to give my personal website a visual and functional boost with the best technologies I'd worked with over the past two years.

## Time to bake!

Ingredients:

- Nextjs
- Reactjs
- Mantine.dev
- A plate of Vercel.com

Directions:

1. Clone a base Nextjs starter repository
2. Add a base Layout page, simmer for 1 week
3. Add models- roles, skills and projects, cook for 2 weeks until foamy
4. Serve hot on the Vercel.com plate. (Cold start pun not intended)

*Serving size: 70kB per request*

I missed the [lightning pace](/blog?postid=id_blog_loctracker) that I could create apps at when I used the Blitz framework, but I wanted to give Next a shot. Blitz announced it was pivoting from a fork of Nextjs to a framework agnostic toolchain.

I was pleasantly surprised with my Nextjs experience. Blitz preserved most of Nextjs' features, so there was barely any learning curve. Within a few days, I was able to get a simple prototype app on vercel.com.

My styling library of choice before this project had been material UI bootstrap. While it had its advantages, I wanted to experiment with [Mantine.dev](https://mantine.dev/), an amazing React library that I considered using in a Blitz project, but didn't want to invest time debugging some npm issues that arose with using it.

It took me another week to understand all the features Mantine offered and implement the ones I needed in my app. The end result was something I am proud of. I was happy I spent the past two years learning the skills I did.