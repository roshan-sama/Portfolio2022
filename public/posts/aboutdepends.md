Blog in progress.
=================

Summary: Writing code for everything you need from scratch takes time, likely an infeasible amount of time if you are writing a web application. The explosion of Javascript libraries to assist with everything from form validation to UI animations makes getting started easy. But what are the security implications of downloading and utilizing gigabytes of code we didn't author?

While working on my progress tracker application the other day, I reviewed the features I wanted to implement. 

I wanted the ability to write in yaml, and in real-time, have that trigger both behaviors and be structured in a visually appealing manner. My first instinct was to look up yaml to JSON converters. After a few hours of research, I landed on the open source [js-yaml](https://github.com/nodeca/js-yaml).

Of course, the entire app needed authentication/authorization.

I was scrolling through youtube while working on the app, and stumbled across a programmer trying to create their own web browser from scratch. I thought the idea was amusing, and decided to estimate how much work it would actually be to try implement everything I was using in my progress tracker from scratch. If node_modules is any indicator, I would be writing code for two lifetimes...

I'd also recently been concerned with security, and the Youtube video I saw was the catalyst that made me think more about how secure my project truly was. This was the first time it truly dawned on me that I didn't really have good safeguards in place to ensure the code I was using was non-malicious! What were standard best practices to ensure the packages I imported were safe? And are there tools that can make sure that when my project is being built, the dependencies that are downloaded are trusted and valid? 
