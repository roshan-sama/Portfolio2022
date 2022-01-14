const blogs = [
    {
        title: "How this portfolio app was created",
        items: "Describe: 1) The components used in the app. 2) Why the components were chosen \
        3) challenges you ran into when creating the app and how they were resolved"
    },
    {
        title: "Blitzjs subtemplate contribution",
        items: "Describe: 1) The additions made to the feature 2) Why the specific additions were made \
        3) challenges you ran into when creating working on the feature"
    },
    // Basically, any project I worked on can be blogged about in the above components/ skills used, why those were chosen, and
    // challenges encountered. Each of the challenges encountered could get their own sub blogs if they are large enough
    {
        title: "About devops",
        descriptiuon: "In the beginning ,there were computers and peple had to go to them and program on them and those computers will run the code right away. \
         Havgin a 'single environment' like that was probably not a good idea, so \
         the idea of a dev vs prod environment was inventeed. This led to the need for some way to get\
          the code from dev to prod, which today is called devops."
    },
    {
        title: "About dependencies",
        descriptiuon: "Rewriting everything you need from scratch takes time, likely an infeasible amount of time if you are writing a web application. \
        You will have to use a Tech stack written by another person or company, i.e.: ASP.NET Core, Spring boot, etc.\
        Considerations: Make sure their philosophy aligns with yours. E.g.: Mantine's creator prefers to not use libraries like tailwind\
        which use several utility classes, and after using Mantine, I agree with this philosophy. For \
        this reason, it makes sense for me to continue to use Mantine because I know that the decisions and problems I face \
        will be handled by the owner in a similar way to how  I would handle them (by not using utilit y classes but rather favoring the way Mantine does thins) \
        TODO: Is there a name for the style of css that mantine uses"
    },
    {
        title:"My long term goal",
        description: "I'm playing the long game. I'm not aiming for high figure salaries right now, but rather am looking to expand my knowledge of software tools, languages and concepts so that \
        the day I decide to start something on my own, I have an understanding of the advantages and idsadvantages of certain technologies and which ones to leverage\
        to solve a problem Im having"
    }
]

export default blogs