---
posttype: "blog"
path: "/blog/ml-interview"
date: "2021-12-28"
updatedDate: "2022-07-18"
title: "When 97% of your Machine Learning Engineer Interviews are with Men"
tags: ["Data Science"]
description: Of the 33 interviews I had for machine learning engineering roles, only 1 was with a woman.
---

![](https://miro.medium.com/max/1400/1*e5iBJnQjKT8cIOqj3hW2cg.png)


In November and December of 2021, I interviewed for machine learning engineering roles at 9 companies. I interviewed for a variety of companies: software companies, AI startups, R&D groups within larger organizations, and data science consulting groups.

During the interviews, my interviewers took extensive notes about me and my capabilities. But as a data scientist and machine learning engineer, I couldn’t help but reciprocate this data collection process. Therefore, I also collected metadata about my interviews and interviewers in order to conduct an analysis about my overall interview experience.

This article outlines some of my main findings. Some of the findings are conducted with a humorous lens and are meant to be facetious. However, my most serious finding, which may not come as a surprise for most folks in this field, is the dearth of female interviewers. Of my 33 interviews, only one was conducted by a woman, and it was not even a technical interview (it was a 20-minute music theory interview for a team specializing in automated music generation). This means that the other 32 interviews were conducted exclusively by men. On the other hand, every single one of my recruiters were women.

What does this mean, and why does this matter? This article doesn’t aim to explain any behavior or share surprising insights we don’t already know about. Rather, it aims to share a personal anecdote of what it looks like to interview for a machine learning engineering role, and to highlight the utter lack of gender diversity in many of these companies.

## Data

I collected three types of data: about the interview, about the company, and about the interviewer. In some cases, I additionally extracted features I deemed important for each collected data point.

**Interview**. I collected information regarding interview duration in minutes, video platform used, and type of interview (Machine Learning, Coding, Behavioral, etc.).

**Company**. I collected the name of the company, the size of the company (Small, Medium, Large) and the location of the office (US, UK). To anonymize the identity of the companies, I represented each company by the first letter of its name. If two companies both started with the same letter, I differentiated them with numbers as well (i.e. S1 and S2).

**Interviewer**. I estimated the age (one of three very scientific categories: Youngish, Middlish, and Oldish), ethnicity (White, Indian, and East Asian) and gender (Male, Female) of each interviewer. To anonymize the identity of the interviewers, I represented each interviewer by features I extracted from their name, such as the first letter of the name and number of characters comprising the name. I additionally extracted a few interesting features such as whether the name is a palindrome, whether the name appears in the Bible, and whether the name corresponds to that of a US president.

## Descriptive Analyses

### Interviews

Overall, I had a total of 1580 minutes, or 26.3 hours, of interviews. Interviews were a median of 45 minutes and a mean of 47 minutes long, with the shortest being 20 minutes and the longest being 120 minutes. 55% of the interviews were held on Zoom, 36% on Google Meet, and 9% on Teams. 82% of these interviews were technical (machine learning, coding), while 18% were non-technical (behavioral, music theory). A more granular breakdown of each interview type is shown below.


<figure>
  <img
  src="https://miro.medium.com/max/1400/1*Ve2gziz8wmMvSpCzA1fMlQ.png"
  alt="Total number of interview minutes per each type of interview.">
  <figcaption align="center"><i>Total number of interview minutes per each type of interview.</i></figcaption>
</figure>


### Companies

Of the 9 companies I interviewed with, 66.6% of the companies were US-based and 33.3% were UK-based. 56% of the companies were large (> 10K employees), 21% were medium (> 1K employees), and 21% were small (< 1K employees).

As may be expected, the larger companies were able to afford more interviews, given access to a greater amount of resources. It goes without saying that the CEOs of all of these companies are men: all White men, except for one East Asian man and one Indian man.

<figure>
  <img
  src="https://miro.medium.com/max/1276/1*Z0tNEwYnJfHADwXix2vrAQ.png"
  alt="The number of interviews for each company. Company size is marked by color.">
  <figcaption align="center"><i>The number of interviews for each company. Company size is marked by color.</i></figcaption>
</figure>


### Interviewers (Demographics)

Oof, this is rough. 97% of interviews were with men and 3% with women. Looking at total  _minutes_, the percentage is even worse: 99% of interview minutes were with men, with only 1% of interview minutes with women.

The ethnicity breakdown is also not surprising. 81% of my interviews were White, 15% were Indian, and 3% were East Asian. Looking at gender and ethnicity, 78% of my interviewers were White men.

<figure>
  <img
  src="https://miro.medium.com/max/1398/1*zAhfGRliV5_VBPXU9Kfg8w.png"
  alt="Breakdown of interviews by gender and ethnicity. 48% of my interviewers were middle-aged White men.">
  <figcaption align="center"><i>Breakdown of interviews by gender and ethnicity. 48% of my interviewers were middle-aged White men.</i></figcaption>
</figure>


In fact, if we consider both age and ethnicity, 48% of my interviewers were middle-aged White men (second most common being Oldish White men and Youngish White men). Interestingly, I had as few East Asian male interviewers (just 1) as I had female interviewers (also just 1).

<figure>
  <img
  src="https://miro.medium.com/max/1400/1*YmQuXZkLXD6Rf2D3gavDOw.png"
  alt="The number of interviews for each age, ethnicity, and gender intersection.">
  <figcaption align="center"><i>The number of interviews for each age, ethnicity, and gender intersection.</i></figcaption>
</figure>



### Interviewers (Names)

A  [NYT article from 2018](https://www.nytimes.com/interactive/2018/04/24/upshot/women-and-men-named-john.html?auth=login-email)  found that there are almost as many men named John in American leadership roles as there are women. Around  [3.3% of the American population](https://namecensus.com/first-names/common-male-first-names/)  are named John while around 50.8% are women. While I only had one “John” among my interviewers (therefore, 3% of my interviewers, which seems normal), there may be some additional interesting insights found in the names.

For example, 27% of my names ended with the letter ’N’. The length of the first name ranges from 3 to 8 characters long, with a median of 5 characters long. Names beginning with J or I and ending with N were the most common type of name. In contrast, the name of the one female interview began with K and ended with A (no other male interviewer shared this combination).

<figure>
  <img
  src="https://miro.medium.com/max/1336/1*5KynQ9zo0Pg1mLyLlk_ueQ.png"
  alt="Number of interview names, showing only the first and last letter of their first names.">
  <figcaption align="center"><i>Number of interview names, showing only the first and last letter of their first names.</i></figcaption>
</figure>


Additionally, 12% of names were also the name of a US President, while 33% of the names appeared in the Bible.  **Most important of my findings is that 0% of names were palindromes.** I guess while detecting palindromes is a common software engineering interview question, it is not as common for names in the wild to display palindromic tendencies.

## Why does this matter?

In my current position as a data scientist with the United Nations, I forget that a gender disparity exists in the technology field, because the projects I work on are composed nearly equally of women and men. Similarly, during my work with DeepLearning.AI creating a course on AI for Social Good, there are more women than men on my team. During my Master’s, as well, I never noticed a particular gender disparity among my classmates.

However, gender disparity in the technology field, and especially within machine learning, is nothing new.  [WIRED magazine and Element AI](https://syncedreview.com/2020/03/13/exploring-gender-imbalance-in-ai-numbers-trends-and-discussions/)  found in 2018 that only 12% of leading machine learning researchers were women. In this article, I mostly explored gender disparity, but there are other facets of lack of diversity to explore, such as the fact I only had White, Indian, and East Asian interviewers.

But why does this matter? The majority of the interviewers I met were kind, considerate, smart, and fun to talk to (I consider 84% of my interviews to have gone well). Most of the interviewers were working on interesting and meaningful projects, were passionate about their work, and were experts in their field. From individual interviewers I detected no overt sexism, but the problem comes from the system that devises these interviews. When nearly all of your interviewers are men (but 100% of your recruiters are women), you notice.

The best thing you can do in your own career is to  _pay attention_. Start noticing. Are all of the recruiters you interact with women? Are all of your interviewers men? Does it have to be this way? Why is it this way? How does this influence your experience? Representation matters, in both subtle and overt ways. And if you’re in a position of power or have some influence over hiring, DO BETTER. This is embarrassing.

One of my main learnings from this interviewing experience is that reading about statistics is very different from experiencing the statistics yourself. I can only hope that at some point in my career, the diversity in this field (not just gender, but also ethnicity, sexuality, religion, class, and the intersection of these myriad categories) will improve so much that I won’t need to spend any time counting how many women are in the room.

----

Originally published on [Medium](https://medium.com/@yennie.jun/when-97-of-your-machine-learning-engineer-interviews-are-with-men-202b09811086).
