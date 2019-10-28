# EmojiPages 📚 

## A listing of books and plays depicted through emojis.

[Visit emojipages.com](https://emojipages.com)

![Screenshot of Emojipages homepage](readme/emojipages-screenshot.png)

> This project were built to create a fun, judgement free space for those learning Git and Github to practice making pull requests, branches, adding features, and more. 💛 💙 💜 💚 💖

## Contributing Guidelines 🎁

Below are some additional guidelines to follow when contributing to this project. 

### Adding or Updating Features Contributions 🚧

* [Find an Issue](https://github.com/brittanyrw/emojipages/issues) that you would like to complete. 
* If someone is already assigned an Issue, please move on to another Issue. If the Issue has not been assigned, comment inside of the Issue stating that you would like to work on that item. 
* Wait for confirmation from the maintainers before working on the Issue. 
* After you receive confirmation, complete the Issue and submit a Pull Request.

If someone is assigned an Issue and doesn't complete it after a while, we will open the Issue to everyone else again.

If you would like to suggest a new feature, create [an Issue](https://github.com/brittanyrw/emojipages/issues) and outline what it is you think should be added or updated. Wait for confirmation before working on the Issue. 

### Adding a Book or Play 📕

To add a book or play to this project, you will need to add an `Emoji Card` inside of the `data.js` file. The `data.js` file is made up of an array (a list) of objects. You will add a new object for your book. 

If you need help choosing a book to add, [check the Issues](https://github.com/brittanyrw/emojipages).

Below is an example of what a book looks like on the website:

![Screenshot of emoji cards](/readme/emojipages-card.png)

In the `data.js` file, each `Emoji Card` consists of the following object:

```
{
    title: "The Devil Wears Prada",
    author: "Lauren Weisberger",
    emojiImgs: "😈👩🏻‍🦳👠👩🏻👗👛",
    genres: ["drama", "comedy","romance"],
    year: 2003
}
```

View the [Card Overview](/docs/card_overview.md) for more details on each part of the emoji object.

#### Walkthroughs
Below are detailed walkthroughs on how to add a book or play to EmojiPages.

* [Add a book or play via Github website](docs/github_ui_walkthrough.md) (no downloads required)
* [Add a book or play using your local development environment](docs/local_dev_walkthrough.md) (downloads required, most commonly used way to contribute).

### Important Notes 🚨
* Follow all the instructions in the [Card Overview](/docs/card_overview.md) for adding a book or play.
* Search the data.js file and pull requests to make sure you are not adding a duplicate.
* Make sure your emojis actually depict the book or play.
* You do not have to wait for confirmation to create a pull request for a book or play and you do not have to make an Issue first.
* If you are adding multiple items, please include them in one pull request.
* **[Go through this checklist](docs/card_overview.md#card-pull-request-checklist) to make sure you have added everything needed for a book or play.** 
* Please [fix conflicts](https://help.github.com/en/articles/resolving-a-merge-conflict-on-github) if your pull request has them.

## Other Projects

Check out my other emoji themed projects.

### 📺 EmojiScreen: A listing of movies, TV shows and musicals depicted via emojis.
* View [EmojiScreen.com](https://emojiscreen.com).
* View EmojiScreen [on Github](https://github.com/brittanyrw/emojiscreen/).

### 🎶 EmojiBops: A listing of songs depicted via emojis.
* View [EmojiBops.com](https://emojibops.com).
* View EmojiBops [on Github](https://github.com/brittanyrw/emojibops/).

## Git and GitHub Resources 📚
* [Git Handbook](https://guides.github.com/introduction/git-handbook/)
* [Additional Git/Github Practice](https://try.github.io/)
* [Visualizing Git Commands Tool](https://git-school.github.io/visualizing-git/)
* Try creating a [new branch](https://github.com/Kunena/Kunena-Forum/wiki/Create-a-new-branch-with-git-and-manage-branches) for your pull request.
* [Syncing your Fork](https://help.github.com/en/articles/syncing-a-fork)
## Credits

💖Check out a list of all [of the EmojiPages contributors](https://github.com/brittanyrw/emojipages/graphs/contributors).

Emoji graphics are by Twitter and are licensed under CC-BY 4.0. Review the [Attribution Requirements](https://github.com/twitter/twemoji#attribution-requirements) for more information.

> Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms.
