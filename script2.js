document.addEventListener('DOMContentLoaded', function() {
    const phrases = [{
            title: "Show your tiddies!",
            description: "Yes, you read them right, IRL or model ones, IDC. Don´t forget to add a slutty caption like: [Come get your protein], [I´m the only one getting hot?], [I´m lactating, come get your milkies], [Get me pregnant].What do you mean? of course this is not my preference... or is it?",
            image: "https://i.pinimg.com/736x/97/e1/29/97e1298cf336a0b6c69d523b9513ff00.jpg"
        },
        {
            title: "Reply to 10 different people",
            description: "Dont be a bot! Interact with other people you like. Be nice, idk. Say congrats, good morning or add a little something to a trend",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Follow 5 new people",
            description: "Are there creators you binge watch but not follow? Maybe now its the moment. If not, find creators your size and just follow them! Being aware of your coworkers is a nice way to start your virality super-star journey.",
            image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=500"
        },
        {
            title: "Be honest you ugly fuck!",
            description: "Oops, sorry. I didn´t want to talk to you like that my precious star in the rough. But I need you to be honest and compare your graphics and design to your peers. Does your twitter banner and profile pic suck? Maybe its time for a little change! There are a lot of tutorials on youtube on graphic design basics or if not, you can commission really cheap skebs that would do the job for under 40USDs. Plus new art work!",
            image: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=500"
        },
        {
            title: "Please stop with the hoodies plz I beg you",
            description: "Okay, that was clickbait...kinda. If your character only wears a hoodie and jeans... PLEASE, please, plase create a pinterest account. I know I sound insane but your character is your branding. Those clothes are so basic it wont make you memorable, and we want to show how cool you are. Search styles you like and try to come out with something more creative. Even if you think its impossible because it would mean spending money in a new model, that is not really the case. There are tons of assets that can change your vtuber appearance.",
            image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=500"
        },
        {
            title: "Create 1 storytime video",
            description: "Short form content is A-WE-SO-ME! It reaches wide audiences, is easy to repost and its a good chance to try and learn basic skills like video editing, script writing and more importantly how to properly communicate. Create 1 short video about your most embarrasing story. Bonus points if it is sex/relationship related! Dont be shy and remember to repost it on all your socials!",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Introduce yourself in the narrative",
            description: "Is there something popular lately for your potencial audience? cofcofcofloveanddeepspacecofcofcof. Try it! And remember to be ALWAYS respectful about it. Its not about you liking it or not, but you experiencing it and making a good show out of it that would be memorable to your audience. Examples can be gacha otome games, Infinity Nikki, Hello Kitty Island, etc. It can be a special long stream or a reward for a milestone. This is not only for games but other interests like music, foe example. A big k-pop fanbase is also into vtubers, maybe learning about it (if interested) can be a good chance to expand your viewpoint and fanbase, as East Asia is more used to male vtubers.",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Are you really rewarding the support?",
            description: "Make sure all your support is being rewarded, no matter how small. But dont over do it. Like every single reply to your posts on socials, it also helps your algorythm! On Twitch, you can use bots like Mix It Up to have exclusive animations or assets pop up when people follows, subs or raids. Always be kind and thank people by name, and dont forget to prepare a small introdiction to tell every single follow and raid who you are and how grateful you are to have them join you.",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "ASMR Roleplay",
            description: "Yes, we are doing it. AB-SO-LU-TE-LY. If you don´t see yourself streaming a ASMR, then a Youtube video or a short could be nice. There is no need for it to be serious if you don´t want to, you can give it a little twist like [catboy enters the bathroom while you poop and stares at you with dead eyes]. That being said, if you want ideas or a serious roleplay but can´t think of anything you can check r/ASMRScriptHaven. Just remember to credit the writers.",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Collab Time! Two person hang out",
            description: "Collabing is an awesome way to know other creators, have a great time and spread the word about you even existing. That being said, there are important factors to have successful collab. 1- Not a bunch of people. 2- Remebering basic streaming etiquette (muting yourself to adress your chat, put a little pinned message to tell your comunity you would take a bit to reply, etc), 3- Keep the conversation going without making the audience feel left out! Can be hard, I know, But when asking the other person a question, you can say you read it from chat or ask the question not only to your collabing partner but every viewer. Two person collabs are the best to get to know the other person, their community and have a great time. Remember: collabs are for growing your brand, not your views. There is a chance that your viewers will lower when collabing, and its normal! Dont worry. Don´t forget to ask your collab partner to try the twitch stream together funtion to have joined chats.   ",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Create a Discord-only event!",
            description: "If you dont have a Discord server, this is the perfect moment to create it and have an opening party. Watch a movie, play a game, masturbete with your comunity, whatever you want! You can be scared because you think noone is going to show up, and I get it, it can happen. But if scared, ask friends to join you. Don´t forgrt to actively promote the date at least a week before the event. Make graphics, invite friends and followers, and make it attractive with things like: a place to creators and viewers to hang out, want people to play X game? We will have a gaming party!",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Ready to react? Yesssss, we watching youtube",
            description: "It doesnt have to be just putting a funny video, you can have a theme. Watching videogame trailers, Childhood anime openings, viewers countries/local food, etc. It also doesnt have to be only watching, you can create a tierlist of which country food you would like to try the most, make it a battle on which anime song survives with your chat help, etc... Is a good idea to have a light hearted talk, but you can keep talking alone if people ends not being active during the whole stream. ",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Lets market ourselves!",
            description: "I want you tu create a 300 word or less script in which you explain people why they should follow you. It needs to be fun and exciting to watch. IDC if you say waawaah Im so unfunny wahhwahh. Then say: come to the fucking unfunniest stream in which I, lord mcClown is going to stay in silence for 4 whole hours thinking about why my parents didn´t use a rubber when I should have been born out of one with the amount of balloon-puppies I have to do to make a living. Everything can be funny and have its audience, you just have to present it pretely with a ribbon. The ribbon is not only your script and how well you read it, but also the editing. No need to be a pro, but remember to have pretty font for subtitles, change scenes so its not only your model talking, add clips if you want to, memes, reaction images... You can go as crazy as you want. Just need a little bit of time and a couple youtube tutorials for you editing software. You can talk about games you play, what kind of vtuber you are, if you have a special talent you showcase in stream or a personality trait you cant hide (like talking way too much, could you guess it by how freaking much I type?).",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Cringe tweet",
            description: "Something like: Do you love Sanrio? Because Hello Kitten ;) ; Are your feet cold? Don´t worry sweetheart Imma suck them now ; Whats your pussy size?; You are so short and I have some extra couple inches for you. If you add model pics/gifs/videos you get a S+++",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Post your funniest clip to date",
            description: "If you want to edit it, do it. If you think there is no need, just upload it as it is on your socials. No extra links to nowhere, just you sharing a really funny moment you love. Caption it with maximum 2 lines of text and 1 hastag max. We dont want to try hard it, just post it. Lets not expect more than it. If someone sees it and interacts, like and reply to them. Maybe even stalk your socials and if you like them, drop a small follow.",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Watch at least 15 minutes of another streamer your size",
            description: "Search for your fav game or category and scroll till you see someone your size with who you genuinly vibe. Drop a follow and engage in their community. Genuine interest for other peoples content will not only make yours better, but may even lead to friendships with the creator, community and of course, a super fun time!",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Reply to your friends posts",
            description: "Suporting friends is the way for their and your success. Try to not RT stuff, as it can make your account not look appealing for possible followers, but likes and replies are always a great way to engage and may lead to your comunity finding also your friends. If you reply to people, you will appear on their feed more often and so, they wont miss your posts eighter! Its all a win-win situation. That being said, dont make super long conversations. Thats just spam.",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Send a little something to everyone that likes your tweet",
            description: "Yes, exactly. You can send a stupid meme, a thirst audio, irl pics, what you ate today, your feet... Just promise to send a surprise to everyones DMs in exchange of a simple like. This would do wonders for your engagement, but I wont recomend doing it if you have under 50 followers or not planning on sending smexy stuff. Im sorry its just how it is.",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Are you into?",
            description: "No matter the kind of vtuber you are or its design, this post has a chance of pooping off I swear. Are you a cat? Then go with [Are you into Catboys?]. It can also be features of your character, like [Are you into big fat cocks like mine?]. Other examples can be hair colors, tatoos, a clothing style, femboys, etc. And don´t forget to a attach a picture, gif or video.",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Fall for a interaction bait",
            description: "Yes, sweetie. We are falling for that obvious interaction bait. [Male Vtubers are nice], [Where are the male vtubers?], [show me your designs] and other variations. We are all here to grow somehow, so be nice to the baiter and be nice to the other people replying. The best publicity you will ever have is being nice to people, dont forget to try it! ^^",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Child-hood Story time",
            description: "Lets script, edit and post a short video/tiktok about childhood memories. People loves cute long ago stories about our silliest years of life, so find one you think can be interesting and start recording! Remember it should be under 60 seconds to have the highest chance of perfoming well, so work on the script to make it as simple as possible and on the editing to remove as many silent moments as you can. ",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Create a stream event!",
            description: "Events or podcasts are an amazin way to interact with people in a not so chaotic way and have form. The difference between this and a normal collab are many, but the main reason is thats not just playing. An event is not playing fornite, but holding a fornite championship is, and can give really good results if properly organized. Its a lot of work, but it should also be rewarding if you do proper promotions and don´t mess up the organizing. Remember, smaller the event the easier to manage, if you dont feel confident yet, maybe instead of a fornite championship a quizz style show can be a better option. ",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Join a event!",
            description: "Open Twitter, fella! We have an event to join. If you are using this stupid website, you probably are not invited day and night to join events, so we have to search for them and more important, be realistic about it. You probably wont make it into a holostar collab, but we can join one organized by streamers of similar size. You can search a game you like and add cup to the end and Im sure after a little bit of scrolling you will find something. No need to be a sweaty gamer, you can join just for the fun. Remember to be super nice to everyone and introduce yourself when entering (without spaming my good lord). Also, its important you remember the limit in which being active mixes with annoying. Thats not it.",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "OBS checkpoint",
            description: "Oh, OBS... Our lord, savior and biggest headache. If you read this, is a sign from heaven to put some filters to your audio settings, make your overlay look good and clean all those sources you no longer use. Take care of your workstation for better productivity and having your audience not wanting to strangle you everytime they hear your horrible mic.",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Goodnight Tweet",
            description: "I dont care if it is 3pm, tweet a goodnight. It should go along the lines of [Goodnight, daddy is falling asleep. Como join me ;)] o [Im going to sleep now, hopefully Ill dream about you ;)]",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Vtuber Tierlist",
            description: "We are back to 2024, baby. Smash or pass, will I suck your toes, Would I win in a fight, am i going to steal your mum? Whatever you want. Lets do a tierlist that involves other creators. If you dont have time to check their content, make sure you specify its going to be rated on design only. Remember to be respectfull always. We dont want no petty drama.",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Yaoi-fy male interactions",
            description: "It doesnt have to be insane, but if you have a friend... maybe you should start joking about eating eachothers dicks, Im just saying. It doesnt have to be that explicit, but people loves dinamics. It doesnt have to be romantic, but playing supposedly romantic games with another member of the same sex is content wise a goldmine. Find someone to play games like [It Takes two] ",
        },
        {
            title: "Create a video showcasing your talent(s)!",
            description: "Are you good at art? music? touching your balls with both hands while playing league with your feet? SHowcase it to the world! Everything is a skill worthy, dont start againg with your I dont have anything. Are you stupid af? Do a video trying to fill a primary school test. English your second language? Try pronouncing difficult words. You havent exercicing since 1724 and your ass is one with your seat? Try a measuring your hearbeats while doing basic exercicing. Everything is a talent worth showcasing if you think about how to do it even if it looks like a disadvantage at first glace.",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
        {
            title: "Improve your Twitch channel redeems",
            description: "Lets make sure your redeems are not too cheap or too boring. Something simple like patpats, bonks and a couple sound effects are nice, but Im sure there are redeems only you can think about or create. Think about it a little and create something interesting to your viewers, you know them better than me. If you want my opinion, you should add somthing like [I call you my little kitten baby doll candy icecream sweet sunshine pizzacrust I would never leave uneaten]",
            image: "https://images.unsplash.com/photo-1495727034151-8fdc73e332a8?w=500"
        },
    ];

    const phraseContainer = document.getElementById('phrase');
    const imageElement = document.getElementById('phraseImage');

    function showRandomPhrase() {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        const selectedPhrase = phrases[randomIndex];

        // Update the text with title and description
        phraseContainer.innerHTML = `
            <h2 class="phrase-title">${selectedPhrase.title}</h2>
            <p class="phrase-description">${selectedPhrase.description}</p>
        `;

        // Update the image
        if (imageElement) {
            imageElement.src = selectedPhrase.image;
        }
    }

    // Show initial phrase
    showRandomPhrase();

    // Add click event listener
    document.getElementById('new-phrase-button')
        .addEventListener('click', showRandomPhrase);
});