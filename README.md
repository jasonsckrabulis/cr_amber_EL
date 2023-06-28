Here are some text directions for what I'm actually doing here. I'd appreciate not giving this out to others until we know it works and I
can package it up nicely!

*Keep all these files in the same folder on your desktop or something.

To use the timer, just open index.html in your browser of choice. I use Chrome so I know it works there! You should be able to window capture it though 
your streaming software.
On open, the time will be empty and not display. Just type in the number of hours you want to stream for (decimals work: ex, 3.5 hours).
Then, check which of the cases are true. For you, you wanted all of your donation history to count for your added time, so we check the first box.
If you only want donations that occur during the marathon to count as added time, we check the second box.

Clicking the 'Start Timer' button will start your countdown immediately. It works by looping through the normal countdown every second for 15 seconds.
After that, it will grab your donation data from the Donor Drive API and compare it to the last time it was grabbed. I would mention that if people in chat
aren't seeing their donation add time, that they should wait at least a minute for their donation to increase the time.

I put those two color options together and included both. Orange background = cramberorange.css; blue background = cramberblue.css.
If can edit any of these files in a text editor and change what you'd need to. In index.html, line 6 references which style the page uses, just rename it 
to the style you want, or any new one you can make.

Now, for every new year, we get a different participant ID, which will need to be changed every year. You can do that ‌in the scripts.js file. Lines 14 and 28
will need to be edited with your new participant ID. This is one of the things I'd like to finish and add to the webpage dashboard.

Feel free to DM me on Discord with any questions!
