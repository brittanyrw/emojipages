## Card Overview

On the website, each `Emoji Card` displays 1) images of the emojis, 2) a hint icon that will show the year the book was published (when the user hovers over the question mark) and 3) the name of the book (which appears when the user clicks on a card).

![Screenshot of EmojiPages Items](../readme/emojipages-card.png)

In the `data.js` file, each `Emoji Card` consists of the following object:

```
{
    title: "The Devil Wears Prada",
    author: "Lauren Weisberger",
    emojiImgs: "😈👩🏻‍🦳👠👩🏻👗👛",
    genres: ["drama", "comedy","romance"],
    year: 2003,
    itemLink: "https://www.goodreads.com/book/show/5139.The_Devil_Wears_Prada"
}
```

To add a new card to the website, add a new object in the `data.js` file. Make sure to separate your new object from existing objects with a comma. Below is an overview of each key in the `Emoji Card` object. Every key is required.

### Title 👍

Each card must have a title. This should be the full title.

```
{
  title: "The Devil Wears Prada",
}
```

### Author 📚

Add the author as a string. If there are multiple authors, include them all in one string such as `author: "Author One, Author Two"`.

```
{
  author: "Lauren Weisberger",
}
```

### Emojis 😍

The emojis should be added to `emojiImgs` as a string. Your emojis should be surrounded by double quotation marks.

## **Important Note: Add at least four emojis and a maximum of six emojis for each card**

```
{
  emojiImgs: "😈👩🏻‍🦳👠👩🏻👗👛",
}
```

Using JavaScript, the emojis are converted into [Twemoji (Twitter's emoji version)](https://github.com/twitter/twemoji) so that all emojis will be uniform across platforms. And because they are pretty cute. 💖

Here are a few resources to find emojis to copy:

- [Twitter Emojis](https://www.piliapp.com/twitter-symbols/) - Shows you what each Twitter emoji looks like. 
- [Get Emoji](https://getemoji.com/) and [EmojiCopy](https://www.emojicopy.com/) are tools to copy regular emojis easily from one page. Note: The initial homepage does not display all skin color versions of each emoji so you will need to search in Emojipedia for those.
- [Emojipedia](https://emojipedia.org/) - A directory of all emojis.

Note when you copy these emojis and paste them into your text editor or Github, they will no longer look like the Twitter emojis. But don't worry, Javascript will convert them to the Twitter emojis on the EmojiPages website.

### Genres 🔍

The genres should be added as an array (the square [] brackets indicates an array or list). Separate each genre with a comma and each genre should be wrapped in quotes. There is no limit to the number of genres but try not to add too many.

```
{
  genres: ["drama", "comedy","romance"],
}
```

Select your genres [from this list of genres](https://github.com/brittanyrw/emojipages/blob/master/genres.md). If you want to use a genre that is not on this list, in your pull request please add the genre to the `genres.md` file. 

If you need ideas for what genres to select, you can check the Wikipedia page for the book as well as the [Goodreads](https://www.goodreads.com/) page for the book to help you out. 

### Year 📆

Specify the year the book was published. This should be a single number with no quotations around the year.

```
{
  year: 2003
}
```

### Link 🔗

A link to the book on [Good Reads](https://www.goodreads.com) should be added as a string. It will be used for users to go to that page and know more details about the book.

```
{
  itemLink: "https://www.goodreads.com/book/show/5139.The_Devil_Wears_Prada"
}
```

# Card Pull Request Checklist

Follow the checklist below when working on adding a card. This will help you double check that you have everything you need to have your Pull Request approved.

- [ ] 💜 There is an Issue for this show/movie and you have been assigned to add it. 
- [ ] 👍 The pull request has a descriptive title (such as `Added Matilda` or `Added all of Jane Austen's books`)
- [ ] 🖍️ The new books(s) or play(s) have been placed in alphabetical order based on `title` inside of the `data.js` file. 
- [ ] 4️⃣ There are at least four emojis listed under `emojiImgs`
- [ ] 6️⃣ There are a maximum of six emojis listed under `emojiImgs`.
- [ ] ⭐ The genres are all inside of square brackets `[ ]` and each are individually wrapped in quotation marks and have a comma between each one. (such as submitting this `"genres": ["fantasy", "children", "adventure"]` and not this `"genres":["fantasy, children, adventure"]`). 
- [ ] 💜 The genres used are from this [genre.md](https://github.com/brittanyrw/emojipages/blob/master/genres.md) file. If the genres you want to use are not in this file already, add them in the file in alpabetical order.
- [ ] 📅 There is a single year under `year`. 
- [ ] 🔗 There is link to the book on [Good Reads](https://www.goodreads.com).
