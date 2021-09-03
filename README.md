Our aim was to create a web application to visualize different characterstics of FIFA-2020 dataset.The
project provides an easy to use interface which helps the users to display the number of players
according to their country on the world map. Although the display alone is not enough and there
are other questions that we answer for the users in this app. We have used various kinds of charts
and graphs to answer these questions.The application is built from scratch and we haven’t used any
kind of template. All the charts are created from using Google chart Javascript.

![image](https://user-images.githubusercontent.com/13495458/131979457-fa2b2b88-fdb3-41c0-a710-54f10f0d0e5e.png)

2 Introduction
2.1 Application Domain

The project is specifically targeting the audience who are enthusiast to know even subtle information
about football. Although visualizations are made taking into account the various aspects of
only football game, this website can be extended to several other domains as well due to its ease of
use from user perspective and ease of extension from the developer perspective. Use of this project
depends on the data being used for displaying the visualization.
![image](https://user-images.githubusercontent.com/13495458/131979548-749c0f5e-45a1-40af-a522-a7a5142dcfa5.png)

2.2 Questions of Interest with their answers

 To know the regions where football is more popular.We have developed an GeoChart visualization
with map where user can directly visualise which region has more number of players
according to the color density on map (dark green color means more dense area for number
of players and light green means less dense area).We can directly co-relate the number
of players coming from the area to the popularity of the football.User can also hover over
specific region of interest to identify region name and the number of players in that specific
region.We can observe that clusters of regions with high density of players are in South
America and Europe where the sport is popular.
![image](https://user-images.githubusercontent.com/13495458/131979589-bc98dee5-f566-470d-a9f2-df981770c758.png)


 User can get the idea for the wages of player according to his position in the club.We have
visualised this wage component on a pie chart and visualised positions in different colors
along with their discriptions.Various categories include SUB(substitute),RES(reserve) etc.
and user has to simple hover over the specific region in pie chart to know various details
such as category,wage and so on.There are in total 27 positions of players that are plotted on
pie chart. We can infer that clubs spend their majority of wages on SUBstitutes and REServe
players.
 To display the relation between age of player and its overall rating , we used scatter plot for
plotting the relation.User can easily conclude that which age category has the most skilled
players (players whose rating is usually ¿ 85) and vice-versa.We can infer from the scatter
plot the various clusters which lie as an outliers from the data. Players with high overall
rating and younger in age are less which can be observed from data. Players with very high
rating are oftenly in the prime of their careers so are between age 27 to 34.
![image](https://user-images.githubusercontent.com/13495458/131979634-bbfd177d-9313-46be-b2a9-a0d24b1fddf3.png)

 From the data we wanted to know the top clubs in the dataset.For the clubs part,we tried to
visualise various details using the players belonging to particular club using bubble chart.As
players are paid according to their capability, by hovering over bubbles, user can infer which
club has how many players,their wage in euros and the estimated value of all the players of
that particular club. After Visualization, We could see that clubs which having high wage
structure and combined value of the players are playing much better football than their peers.

 We used the potential attribute in the dataset to answer how clubs are valuing the players
with high potential in the transfer market.We tried to answer this question using line
graph.Usually players in 30’s are near to their retirement so we considered players whose
age is near ¡25 (young players).It can be easily visualised that player whose potential rating
is less or equal to 85 (which is a good rating) has steady increase in their worth and after that
slope becomes large as value is increasing more drastically wrt to player’s potential above
85.We could see that players with potential between 80 to 88 are greater in numbers with
low estimated value. As the potential for the player increases so does the value for the club.
2.3 Dataset Used

 We used dataset from the source https://www.kaggle.com/stefanoleone992/fifa-20-completeplayer-
dataset which is publically available
 The size is approximately 48 MB and has 18K+ rows.
 We have preprocessed the data according to the requirements of the project.We have removed
the columns for attributes which were not relevant for the visualization.


![image](https://user-images.githubusercontent.com/13495458/131979701-cbb7e8ac-271e-4e0b-afc3-54d878885c96.png)

![image](https://user-images.githubusercontent.com/13495458/131979722-45d63682-f471-42cd-9ad9-33bd4423fd8e.png)

