# Joyless Shots Indexer

How it works
- List all files that match:`"lines-i-like/{name} [{type}]_shots/*.{png,jpg,jpeg,*}"`
- Find a `JoylessThing` that has a name or an alt equal to `{name}` AND has the label `{type}`
- Create an object
```
JoylessFile {
    path: String,
    thing: JoylessThing,
    thingId: String,
}
```


## Things to consider

- [ ] Files with multiple parts, like `whatever-1-2.png` `whatever-2-2.png`?
Maybe start using a convention like `whatever_[part=1-2]`?

- [ ] What about clips?
I usually have clips in the pattern `"clips/{thing name or artist name}_{keyword}.mp4"`
Should I just mix them? As in **moments = shots + clips**


## References

- https://www.baeldung.com/java-list-directory-files

---

END.
