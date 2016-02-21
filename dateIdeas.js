// each key (number) represents an approximate energy level.
// to add in a new date idea, just pick the rough energy level, and add it in following the same format as the other dates!
// The indentation on this breaks all style guides. I'm ok with it. 
var dateIdeas = {
  0: [{name: 'Cuddling on the Couch', 
        description: 'Light a candle on the table and dive under the blanket together. Likelihood of falling asleep mid-cuddle is high.'
      }],
  1: [{name: 'Indoor stargazing',
        description: 'Lay on couch (or hammock!) indoors. Pull out Google Sky. Tell stories of where you imagine the two of us seeing these stars in person. Avoid booking more than 2 trips tonight.'
      }],
  2: [{name: 'Hammock',
        description: 'Lay in hammock. Cuddle. Point out constellations inaccurately. Hope that the two Newfoundlands this hammock is strapped to don\'t dive into the water with us.'
      },
      {name: 'Eat way too much popcorn',
        description: 'Enter the movies. Buy tub of endless popcorn. Watch movie. Surreptitiously (you know, with the high-knee walking, hunched back, and cackling laughter) sneack into the next film. Refill popcorn. Repeat. Make sure to go to a new popcorn counter each time. Wear boring clothes. Pass out in a butter-drenched haze of explosions and implausibly perfect relationships. Savor your own imperfect match even more.'
      }],
  3: [{name: 'Bonfire at the beach',
        description: 'Fire. Gentle drumbeat of waves. "The next time the sand shares our weight as the sunset glazes the horizon, I\'d love to wrap your fingers through mine, and see what happens."'
      },
      {name: 'Make up your own constellations',
        descriptions: 'The ancients aren\'t the only ones capable of seeing fantastic things in the sky. I\'m pretty sure that\'s my younger brother up there wrestling an ice cream cone in a ball pit.'
      }],
  4: [{name: 'Guacamole Tour',
        description: 'Have one person pick up a smorgasboard of their favorite guacamoles. Bonus combinations come from picking up an equally large array of favorite things to dip in guacamole (be careful- carrots are contentious, chocolate-dipped bacon will get you creativity points, and your date\'s toe will quickly establish whether they share your foot fetish or not).'
      },
      {name: 'Remote Museum Tour',
        description: ''

      },
      {name: 'Climb El Cap',
        description: 'Ok, admittedly, most people don\'t consider hauling around bags of your own poo a particularly romantic activity. And most of us would never be able to keep up with Alex Honnold, Lynn Hill, and Tommy Caldwell. Happily, due to the magic of Google Maps, you can enjoy all this from the comfort of your own armchair! https://www.google.com/maps/about/behind-the-scenes/streetview/treks/yosemite/'

      }],
  5: [{name: 'Artisanal Popcorn Showdown',
        description: 'Get giant box of raw popcorn kernels. No, not the kind that come pre-deliciousized for you by Orville Reddenbacher (sp?), but the kind you have to pop on the stove yourself. Bring flavors that would be at home in a crazy donut shop, a farmers market, or the latest hipster haunt. Compare batches, tournament style. Make up crazy names for each flavor combination you conjure up. Picture world domination and population-wide health improvements through running a chain of artisanal popcorn shops.'
      }],
  6: [{name: 'Board Games at a Bar',
        description: 'Many bars around have board games! What better way to test out your date\'s capability of world domination? Popular places include: Victory Pointe Cafe (Berkeley), Sycamore, The Wreck Room, Soda Popinski\'s, and anything else on this list: https://www.yelp.com/search?find_desc=board+games+bar&find_loc=San+Francisco%2C+CA'
      }],
  7: [{name: 'Escape the Room!', 
        description: 'Pit your combined wits against an impending zombie horde, or time-travelling machine about to go haywire, in one of the many escape-the-room games around. If you\'re really unlucky, you might just time travel all the zombies to the past, when our ancestors were particularly susceptible because they hadn\'t seen all the movies yet and prepared for the zombie apocalypse.'
      },
      {name: 'Mischevious Ice Cream Promenade',
        description: 'Tour around to all your local ice cream & gelato favorites. Get a taster spoon of all the good-looking flavors. For extra weirdness points, blindfold one person. To avoid burning out too early, only sample flavors at each place- don\'t actually buy any ice cream. Tip super generously. Giggle tremendously while running out so that all other customers assume you two hooligans are surely up to no good.'

      }],
  8: [{name: 'Roadtrip Game- City Walking Edition',
        description: 'A new twist on the classic roadtrip game of looking out the window and seeing whose side has more (cows/ice cream stands/bubble gum factories). At each intersection, alternate who chooses which way to turn. After their choice, count up however many (flowers/babies screaming/used needles/couples making out surreptitiously) you pass before the next intersection.'
      }],
  9: [{name: 'Stair Climber',
        description: 'Start in a hilly part of town, with back pathways criss-crossing their way through alleys and community gardens to the top of a hill. Climb said stairs. Then luge/walk/bike/scoot/Uber/dragon/bobsled to the next hill, and repeat!'
      }],
  10: []
};

/*
format: 
energyLevel: name
description
// separate on newline characters first. then every even one separate on the colon. 

5: Jungle Crawl
Crawling around dirty bars sounds much less fun than crawling around the jungle. Let's go exploring the plant and flower stores around, and imagine ourselves in the exotic locales where these plants originally grew. 
3: Telling stories from each others' closets
Go through the other person's closet. Make an outfit from their clothes, and then tell a story of the kinds of events you imagine they've worn this outfit to in the past. Claims of superhero-dom do not need to be refuted. 
6: Dress each other up for a night
You get to avoid all the decision-making of picking out your outfit for your hot date tonight- because they'll be picking out your outfit for you! Whether you choose to coordinate on both creating sexy/silly/creative outfits, or just go it alone and surprise them, is up to you. 
7: Dress each other up ridiculously for a night of adventuring
Let's face it- wearing ridiculous outfits is fun. But oftentimes we lack imagination or guts to wear the best outfits lurking in our closets. So have your date pick out an attention-grabbing outfit for you! This is best done on nights when there is an adventure planned (rock climbing comes easily to mind).
3: Plot a road trip on google maps
Travel the country without leaving the cuddly blanket the two of us share. Each of us gets to plot a road trip. The parameters are up to you- whether this is a weekend road trip, a 3 week blitz, or a 3-year extravaganza!
4: Plan a vacation on a budget of 10 days and $1500
Don't ask where the 10 days and $1500 came from. Maybe I finally figured out alchemy. Or time travel? Either way, you needn't bother with such trivial details- time to start planning what you would do within such constraints!
4: Massages
Simple: push as many of your body parts (fingers, thumbs, elbows, knees, feet, head, glutes, tail, etc.) into as many of their body parts as possible. I'll be yelping in pain the whole time because my body's tight. This is romantic, right?!
2: Creative Cuddles
Spooning's a great position to cuddle in. But so is the mellow dragon, and the fierce chipmunk. Not familiar with those cuddling positions? Neither am I, but let's make them up! Take inspiration from yoga and dance and the kama sutra- people can do way more creative things with their bodies than most of us take advantage of while cuddling. 
6: Scoot!!
Zip zip! Vroom vroom! I dare you to go for a ride on one of these spunky red Vespa-type things and not emerge with a silly smile on your face. No motorcycle license required. 
8: Whale boating
HEAVE! Your choice whether you see this HEAVE! as a celebration of nostalgic masculinity HEAVE! during a time when peoples' strength and daring HEAVE! determined whether they emerged from the seas or HEAVE! not, or whether this is a celebration of HEAVE! our world's increasing civility, a waning of HEAVE! violence, an increased appreciation of nature, and HEAVE! reclaiming old practices as new social pursuits. HEAVE! Either way, we'll spend some great time HEAVE! on the water and getting in a workout. HEAVE!
6: A single drink at a ridiculously fancy bar
Expensive dates feel weird. But feeling fancy can be fun! Get the best of all worlds by having a single drink at a ridiculously fancy bar, and nursing it for a long, long time while savoring some people watching, or pretending to be billionaires. 
6: Privately owned public spaces
Many of SF's tallest buildings have public areas in them, and oftentimes at or near the very top! It's the best of many worlds: we get the feeling that we're practicing our ninja skills while still being totally legal, a great view, and frequently, we'll get the whole place to ourselves. 
8: Sneaking into places you're not technically allowed...
Details can be found at REDACTED
5: Walk along the waterfront
Not much to this one: I love being by the water. I love holding your hand. I love walking in places that stimulate introspection, where the setting itself encourages emotional depth and vulnerability, where the consistency of the waves washing in allows us to savor the inconsistency of the journeys we took to get here, where... ok, maybe there is a bit more to this one. 
5: Wave organ
Some tribe of giants tried to recreate a Greek temple in the middle of the Bay, it got swallowed by the sea, Atlantis style, but the top of it has re-emerged in recent years and we built a land bridge to reach it. Oh, and there's an organ there. Played by the waves themselves. At least one part of this is half-true. What's undeniably true is that this is my favorite places IN the Bay. 
4: Viewpoint at the top of the de Young
It's an incredible, glass-walled 360 panorama of the whole city, from a perspective that few other vantage points offer. It's a peaceful room in a super-modern style that manages to feel very comfortable and welcoming. Plus we get to talk about architecture, earthquakes, statues, dissonance, weathering, and the effects of crowds, while enjoying this totally free viewpoint!
7: Blues dancing
It's a style of movement designed around connecting with your partner, moving slowly, and just feeling some incredible music. I know just enough to lead you in a fun night of dancing after the intro class they offer before each session!
8: Hip hop class
There are some incredible hip hop classes in the city. Let's go learn how to bust a move, while getting in a great workout and having an awesome time moving our bodies!
4: Picnic at the alice marble tennis courts
Theoretically, they're tennis courts. That get reliably too windy to play tennis on. That are at the top of one of the most scenic hills in SF, literally surrounded by Lombard Street, the cable cars, views to Alcatraz and the Golden Gate Bridge, and a park. Realistically, they're an amazingly reliable and peaceful picnic area. 
4: Ride the cable cars
Appreciate the brilliant engineering, allow yourself to time travel back to the earliest days of SF, put yourself in the mindset of a tourist, or just enjoy the ride. They run late into the night, well past when all the tourists clear out :)
6: Thrift Store 
thrift store with $15, only buying things for the other person. then you have to wear that to dinner. 
sit on a street corner and give a compliment to everyone who passes. 
create an algorithm that will lead you through the city randomly. 
musee mecanique.
exploratorium after dark. 
any of the climbing movie events. 
super divey whiskey bar. 
dance floor at the Top of the Mark. 
walking labyrinths. 
drop into a house showing playing the role of a different couple.
go to a home improvement or craft store. buy $14 worth of supplies each. do not coordinate. build things. 
The Ribbonerie. 
magazine store. 
tandem bike ride
ride the elevators in tall hotels. 
climb trees. 
all the urban hikes. 
write notes to your grandmothers. 
visit ridiculous museums neither of you imagined existed (american bookbinders' museum, anybody?!)
park hopping. find all the tiny parks. do something ridiculous in each one. 
explore all the community gardens. 
go through all the alleyways. 
cook dinner, but only with the ingredients that you two (not coordinating) picked out independently. 
top chef challenge- pick an ingredient, and make a dish around it!
create new fusion dishes (middle-eastern burrito, hamburger pho, anyone?)
Stand at a vista point. imagine yourselves somewhere else (grand canyon). describe what it's like to be there. 
rent a car and go stargazing somewhere just outside of the city. there'll probably be no traffic by the time you leave and come back. 
rent an airbnb for a night. 
kayaking
stand up paddle boarding
art walks!
gallery hopping. take on a different persons' persona each time (art student, drunk person, blind person, etc.)
any of the conservatory of flowers or botanical gardens or such ilk. 
rental paddle boats!! competitively. create a strava segment from it. 
chocolate crawl. 
create a pot of melted chocolate. dip things in it. 
learn new massages, and practice them on each other. 
can you massage each other at the same time? foot/leg massages, perhaps? or, even more inventive positions?
contact improv. at an official dance, or alone. 
google street view or google earth of each others' hometowns. 
dumpling making night! form them into as creative a shape as you can imagine
smoothie making night! 'Smoothie pops'. why pops? toss the smoothies into the freezer in relatively small containers, and then enjoy them throughout the whole next week, or during that day's adventure!
dim sum- order everything that comes around that you don't remember eating before. 
dim sum picnic!
sushi- order everything that comes around that you don't remember eating before. 
read to each other
marshmallow castles. build castles. with marshmallows. 
add everything to guacamole. buy large amounts of guac. make mini batches of it by mixing in random ingredients. see what wins. 
morning dance party!
morning ride to hawk hill
morning ride to Muir Beach
Morning ride/walk to sunrise on top of twin peaks (ok, i'll admit it now- i'd actually just hijack that ride to Sutro Heights or Mt. Davidson)
go to one of the public workout things. find something to do on every machine. ideally something that's not the obvious thing. 
do the lap of the workout stations in GGP by the polo field!
lawn bowling in GGP. 
practice casting in GGP. 
archery in GGP. 
walk up one of the many hills around and enjoy some peace in nature at the top. ideally with a hammock. 
set up a tent in a park at night somewhere. ideally on top of a hill. with a board game. and a bottle of wine. 
make pizzas together! except you you're exclusively making one for the other person, you don't get to eat any of your own. whether you choose to make it tasty or "adventurous" is up to you!
Look up family trees together online (not sure if this is possible. if not, just tell tales of your ancestors. believability is not required in this case.)
write a poem together, alternating lines, then alternating stanzas. you get no more than 10 seconds per line, or 30 seconds per stanza. 
nerd nites!
mix your own cocktails. 
spend an entire hour where the only rule is that you must pick two body parts, and those two body parts must be touching the entire time. 
spend an hour blindfolded. both of you blindfolded, then one of you blindfolded at a time. 
spend an hour doing something together with ear plugs in, and not talking to each other. laughing is (oddly) discouraged. board games might be a good one. or looking through a book on artwork together. or cooking together. or giving each other massages. 
make up your own games together!

play music for each other from your music collection. maybe while driving a car. 
play nothing but music covers for each other for hours at a time. 
build a pillow fort!
pick one of each others' favorite dishes, and see if you can create something inspired by that, but different enough to not be compared to it. 
grab 100 stickers each. hide them throughout each others stuff. whoever finds one last wins. 
go enjoy some of the enormous previously-industrial spaces in the city. this doubles as hanging out with fun burning man camps :)
bike or drive to one of the empty bluffs overlooking the ocean. hammock or blanket under the stars while the waves wash in from the West. 
pizza tasting night- go to a ton of pizza places. buy only one slice at each place (not one slice each- one slice). 
have a night where you only wear things from the other persons' wardrobe. 
go whale watching to the Farralon Islands!
take a walking tour of different neighborhoods. there are apps for this, or do it with a guide. 
make christmas cookies together in the middle of the year!
try acro-yoga together. the person with the most bruises wins (they trusted their partner the most!)
try all the slides around. even the ones that don't exist. 
run down Lombard street. then run up it! try doing this on something wheeled where the other person has all the control (shopping cart, tandem bike, etc.)
go through chinatown. 
the russian spas!
see how many stickers or notes or googly eyes you can hide in the other persons' stuff by the end of the night. 
formal picnic in the park. ideally in thrift store clothes. 
make your own candles!
try your hand at pottery
anything at that intercultural transcendental center phillip ventura went to. buddhist chanting, cathartic meditation. it's something like the iscc. 
ride a train all night. 
spell out something with your GPS tracks
make all decisions with the flip of a coin (maybe just the navigational decisions?)
go through an entire show together that neither of you has watched, but is a classic (The Godfather?). read all the synopses in one night. 
walk around one of the local university campuses. 


Relatively fertile and unexplroed territory:
bike rides
Scoot








*/
