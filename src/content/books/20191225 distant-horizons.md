---
# slug: "/blog/my-first-post"
posttype: "books"
path: "/books/distant-horizons"
date: "2019-12-25"
title: "Distant Horizons: Digital Evidence and Literary Change"
author: "Ted Underwood"
tags: ["Nonfiction"]
link: "https://www.goodreads.com/book/show/41591145-distant-horizons"
rating: 4.0
---
Overall - I enjoyed this book! Prof. Underwood has a very pleasant literary style (which makes sense, I guess, since he is a lit prof). He writes in a way that is not difficult to understand or process, and I think that he is able to reach the "delicate balance" he mentions at the end of writing about a very interdisciplinary process/style while not getting too bogged down in the details. As a reader who is well versed in both historical ideas and computer science concepts, this book was quite a pleasure to read. The technical details of his methods were explained in a way that was easy to understand but also not too simplified.

He talks about his "long-timeline" and his "distant reading" methods without losing sight of the ACTUAL reason that he (and other literary and humanities scholars) are conducting research. These statistical and machine learning tools are just a means to an end - which is to say, to ask humanities questions. He stresses that we cannot and do not need to black box these machine learning algorithms, and he strives to "crack them open" in his inquiries. Also, he stresses that there is no need to use the most complicated statistical model out there. Sometimes, simplicity is good.

Main points: "cracking open" black box of machine learning, using more supervised rather than unsupervised learning (so that there is more interpretation, and less of a godlike figure saying this is the right answer)


--

# Intro

- Numbers as not any more or less objective than words
- "I hope to show that numbers can also be at home in the humanities"

# Chapter 1: Do We Understand the Outlines of Literary History?

Overall: Currently, many literary scholars believe that literary scholarship is not about discoveries but about arguments. Underwood argues that using quantitative ways of looking at literature only extends the arguments rather than replaces current methods. It gives us a way to step back and look at bigger-picture and longer-timeline trends that are very difficult to grasp using just close reading. Quantitative methods gives us a way to connect the dots to reveal gradual changes over a long timeline.

- In science, different approaches to the study of life (i.e. biochemistry, bioinformatics) are NOT zero-sum games
    - For literary scholars, it should also not be so
    - Current assumption in literary scholarship is that we are unlikely to discover new things in archives
    - However, we need ways to coordinate different scales of analysis
- "Works of fiction from different periods invite readers to play very different interpretive games" (5)
- Literary scholars are good at using short passages to characterize authors, movements, periods
    - Not so good with **long-term patterns/century-spanning arguments**
    - "**Long Timeline"** - linear, single timeline
- Measurement
    - i.e. counting color words
    - i.e. counting frequency of concrete adjectives, like colors, body parts, action verbs ... "hard seeds"
    - Using this method we can see a transition from telling to showing (something literary scholars already knew!) but we can also see new things, like gap between fiction and nonfiction
    - However, list of words are not entirely convincing on their own. We cannot put too much evidentiary weight on them
- Modeling
    - Start with a hypothesis ... What is the "**meaning"** we want to investigate? What is the specific question?
    - Build a discriminator (on all time periods) to classify fiction and biography. Then see how well it performs on different time period segments.
        - How accurate does this discriminator get as we move down the timeline?
        - **Statistical model of genre**
        - **Continuous, not discrete** model (probability)
    - Learning algorithm d**oes not try and define fundamental differences** between two genres ... it aims simply **to distinguish examples**
    - Using logistic regression "with regularization" and accuracy as metric
        - Used different vocabulary and model for each half-century to avoid anachronistic ... nice!
    - Using ML to find patterns
    - **Describing trends, not motives or market forces**
    - Findings:
        - Rich description more illuminating than explanation
        - Narrative pace, thematic emphasis of fiction diverging from nonfiction for 300 years
- Quantitative methods as a way of connecting the dots, to reveal gradual change over long timeline

# Chapter 2: Life Spans of Genres

- Genres based on communicative actions, reader communities, text pattern ... too many definitions! "All genres change ceaselessly" (35)
    - Genre is not a single object we can observe, describe
    - Mutable set of relations between works linked in different ways, resembling each other to different degrees
- Computer knows nothing about literary history; it models only the evidence we give it
    - "Useful blindness"
    - "**Perspectival Modeling"** - model perspectives of different groups of readers and time periods
    - "Human significance is created only by human history" (37)
- There is no limit to the number of **overlapping** genres that can be associated with a single work
    - Many genres are added posthumously to novels
- "Method of mutual recognition"
    - In order to decide whether two models of genre are similar, then train the model only on A and ask it to recognize B, and vice versa
- Algorithmic models as good at finding common elements that link a group of words
- Measuring change in science fiction genre. Interesting thing is how he asks the question first then uses math modeling after.
- Underwood mentions critics of "quantitative approaches to culture" (64) (like Martin Jay) to refute Jay's arguments. Underwood says that macroanalysis isn't just about counting words or word frequency. Modeling is about building bridges between different scales of analysis.

# Chapter 3 - The Long Arc of Prestige

- How do the standards of literary distinction change? How rapidly? How is direction of literary change related to social pressure?
- Combining rigor of detailed account with the ambitious scope of larger narrative
- Trying to determine the split of mass culture and elite literary taste in last few years of 20th century. Finds that social stratification changes slowly but in ways that weren't expected.
- Recognizes that measuring prestige is controversial and that eventually we should identify celebrated works in many different ways and compare all of those subsets to understand how literature is valued differently in different social locations (73)
- Recognizing biases in sampling. "a digital library is itself a sample" (76)
- Bag of words for poetry and fiction
- How is statistical model able to predict poetic reception so reliably???
- Machine learning leaves a lot of explanatory work to the interpreter
- (poetry vocab is 2600 words)
- Poetic prestige more associated with colors, body parts, first person singular ...  And less with didactic, sentimental, collective
- For fiction the distinction less clear. Especially when inspecting the vocab to see if the model can capture cliches  ... We may also need to do "close reading of specific passages in order to recognize the patterns that make these words symptomatic" (87)
- "I don't want to claim to have measured the pace of literary change in general at all. To measure change, one had to define features that matter, and I doubt that readers will ever reach consensus on a single set of features that matter for all possible literary questions" (89)
- Changes on long timeline are slow and gradual
- Literature moves in a direction shaped by many factors at once. In a model we see a projection of these onto a one dimensional access of measurement (one component of the vector)
- Algorithmic bias - representation of women in texts for example. Fewer women writers so fewer women writers will be reviewed
- Attempt two — add a second axis of analysis - adding information about sales to existing model of probability of being reviewed
- Using Empirical Bayes to quantify uncertainty. Our estimate can be more confident where lots of evidence is available and more cautious where it isn't
- Detect a shift!
- Shift towards ability to have economic success without critical success (100)
- Diversification - numbers can reveal sudden changes (where history contains sudden changes). They can also reveal a host of slower changes that our existing histories have failed to describe (106)
    - But the actual blind spot is theoretical not technical. i.e. whole literary field moving in same direction and not marked solely by conflict

# Ch 4 - Metamorphoses of Gender

- how to reason about hundreds of thousands of fictional people?
    - bookNlp - David Bamman
    - Can model characters and words commonly associated with them. And their gender
- two trends. Gender divisions between characters become less predictable. But also attention devoted to women on the page is declining.
- use bag of words - represent each fictional character by the adjectives that modify them and the verbs they govern. On validation set if accuracy is high it means high binary divide between men and women. Low accuracy means more gender fluidity vocab - data is almost 100k books
    - doctrine of separate spheres starting to be challenged. Blurring of gender boundaries from 1840 to late 20th c- jockers has different conclusion (118)
    - Little change in gendering of verbs in nineteenth c fiction
    - haha. Pocket is gendered male (125). "one of the main things men do have is a pocket; in the 20th c they are constantly putting things in it"
    - another way to look at this is having a model of femininity trained for each half century. Calculate probability for actual women and subtract probability for actual men to assess implicit gap separating genders in a given book or year. Gender divisions is clearer in books by men! Partially bc ... Women are vastly underrepresented in books written by men!
- "we should not be surprised to find that quantitative analysis sometimes reveals unexpected patterns -- for which we already have several good explanations" (139)
- overall - we can get a lot out of this data about gender and how different gender authors associate femininity and gender roles to their characters. More to be done

# Ch 5 - the risks of distant reading

- disciplines change slowly
- Digital humanities. Technology encapsulates tools and our behavior shouldn't change. But in the humanities fields it's hard to use statistical models as tools in the way search engines can be encapsulated and treated as tools. "Scholars cannot adopt a new mode of interpretation without fully understanding the reasoning [statistical models] imply (145)
- This book and it's methods as "a new way of representing and interpreting the world"
- distinguishing distant reading from digital technologies
    - numbers are useful for large historical questions but they will never significantly displace other approaches to literature
- literary scholars probably won't use math in every article bc there's no need to ... Literary scholarship already excels at its own mission. Rather, Underwood proposes to "limit the authority of numbers in the humanities by remembering to appreciate some things we already do well" (147)
- One risk of distant reading is that we might forget the connection that strengths of literary criticism have typically efhoed the strengths of the literary works we discuss
- don't forget! We need to enjoy humanities and we read literature for pleasure. Literary scholars have the "privilege of focusing on things that are interesting or enjoyable" (148)
- Literary historians will benefit from computational methods for long narratives. But we cannot "let the sophistication of our methods upstage the human interests if our subject" (149)
- turning literary scholarship into social science would be a bad idea
- contrasting generalization and particularity has been central to literary criticism for over a century (151)
- Obstacles from writing large scale and interdisciplinary literary analysis. Requires a lot of careful attention to a mass of detail (from science and stats, from formalist critics, from book historians) so you kinds have to pick and choose to achieve a delicate balance of pleasurable resonance" (156) — ie risk of forgetting pleasure
- Another risk - risk of preoccupation with tehnology.
- This misunderstanding can be cleared up with scientists and humanists acquire a basic understanding of each other's methods (158). This would lead to more flexible conversation about human attempts to understand the world by modeling it!! That's why in this book Underwood stressed supervised learning to underscore circularity of historical interpretation and not delegating interpretation to machine like in unsupervised learning. And why he doesn't really mention the word digital a lot
- "the models produced by machine learning do not have to be black boxes" (160) they deserve to be engaged or critiqued as arguments
- This book is not addressed to a certain discipline but for all audiences who want to understand the human past
- Risk of how to incorporate into college curricula?
- Lit departments need to teach stats and stuff. An easy and tempting shortcut would be to outsource humanities research to other teams. But - social sciences don't outsource their stats and neither should humanities departments
- Final risk - becoming addicted to using distant reading
- "there are many historical patterns too large to be explored through the narrow aperture of a single reader's memory" (169)

# Appendix A - Data

- All the data on GitHub
- As Ben Schmidt said - "the goal is not to construct an unbiased sample but to understand each source through its biases" (178)
- Underwood recognizes the many errors probably in his data and challenges of having an incomplete digital library. For example, algorithm doesn't know to skip page numbers and introductions and illustrations. And metadata for these books are sparse. Spelling mistakes. Some books labeled as fiction is actually biography or travel writing. Thus. We cannot eliminate error so we must learn to measure error.
- "this book will turn out to be wrong on some topics" (183). But the goal isn't to get everything right the first time but to advance knowledge in a way that invites further testing and refinement

# Appendix B - Methods

- We shouldn't use statistical methods as stable tools that can just be "applied" to the humanities. Numbers cannot and shouldn't be used to settle questions and closing debated and collapsing interpretation
- Scientists and humanists communicating on a different wavelength. Similar to how with light speed we can communicate with a 100 year lag. Humanists and scientists approach each other as if talking to the version from 100 yrs ago
- The point of numbers in social science is not to impose determinism but to acknowledge uncertainty!
- History of statistics in the last 40 years has really been useful  humanities because now we have ways to measure 100 or 1000s of variables and also not overfit
- Most distant readers don't need neural networks. Simple and transparent methods are usually adequate for predictive text modeling
- Using machine learning and predictive models as sensors to measure and compare implicit associations in different periods
- Goal of historical research is not maximizing accuracy of models but historical insight!!!
- Questions are what matter not the stronger algorithms