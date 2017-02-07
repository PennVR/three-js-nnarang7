# CIS 568 - Three.js Project 
#### Natasha Narang

### GitHub Site: https://pennvr.github.io/three-js-nnarang7/

## Instructions on Building/Assembling
I wrote this project using a few different JavaScript scripts to set up the hardware (for enabling OrbitControls andWebVR) and to generate the different materials and noise coordinates. I load a few different textures for the mountains and sky - these can be found in the images folder. In order to run the app locally, all you have to do is 'npm install http-server' and then run 'http-server' in the same directory that index.html is located. Go to the address for localhost on your terminal to load the VR experience! If you're not running the app locally, you can visit the site [here](https://pennvr.github.io/three-js-nnarang7/), but keep in mind that if you're running the site on Google Chrome, it won't load the images needed to run textures. Instead, it's better to run it on Firefox Nightly.

## Techniques Used
1. In order to procedurally generate the terrain, I used the updated version of the Perlin Noise algorithm. I used the algorithm to create a height map based on the scene's dimensions, and then used the map to deform a larger 'mountain' plane at different points. This led to the randomized plane you see in the scene. I then added a clamped texture to the plane - basing it off of a realistic mountain texture image that I found [here](http://2.bp.blogspot.com/-tiIz0CrNNOA/VR75R1uNFgI/AAAAAAAAHro/2hH-PsAloVc/s1600/Mountain%2Brock%2Bdark%2Btexture.jpg). 

2. In order to generate the sky, I created a dark blue colored sphere that I wrapped the plane in. I then generated random x, y, and z coordinates for each star in a certain range that ensured the stars would be above the mountain plane. To represent the stars, I used small square particles of different sizes. I then mapped these squares to an image of a star particle that I found [here](http://www.xsplendor.ch/img/wallpaper/spaceWP/stern3.jpg), in order to make the stars look more realistic.

3. For the fireworks, I made Points and PointClouds. I start with assigning a set probability for if a firework should be generated, and then render a new point with a random x y and z end coordinate. I then use linear interpolation to update the particle's position every time the render function is called. Once the particle reaches the given end destination, I make a cloud of points that erupt from the position of the initial particle and into random directions. After a few seconds of the particle cloud being generated, it is then removed from the scene to make way for other exploding fireworks.

4. I also added directional lights from the stars, fireworks, and moon to make a more accurate light representation on the mountain plane.  

5. Finally, I added in OrbitControls to the scene so that even if the user is not plugged into a VR headset, he can passively explore the scene.


## Motion Sickness
I didn't directly experience motion sickness, but I definitely felt a strong sense of disorientation. In the beginning, when I hadn't textured any of my surfaces, there was simply a white plane floating in a dark space with stars and when I plugged in the headset and looked around, it was very disorienting to look at the stars above and then look down and feel like there was no surface to hold me up.


## Challenges of the Assignment
1. At certain points as I was adding objects, it became hard to keep track of the orientations of the different objects and where to position them on the x y and z-axes. I spent a lot of time trying to figure out exactly what ranges to position objects in, and I feel like I could've spent a lot less time on this if I had more carefully mapped out all the objects in my project.

2. The fireworks algorithm was also a bit challenging - I wasn't sure which parts of a scene would be automatically re-rendered or where to store the details of the many objects I had in the scene for future reference (because of scope issues).


## Things I Wish I'd Done Differently
I didn't really think about ways to optimize the scene while creating it. For example, I'm sure using images to map to different surfaces in the scene definitely increases computing power needed, but I didn't really play around with ways to make a custom gradient for a texture (for example), that would've made the computation less exxpensive. I wish I had also been able to add some more dynamic effects to the scene (for example: shooting stars, or a river in the middle of the mountains that the user could move along on). Finally, with the star mappings that I use right now in my scene, the shapes are all squares and, looked at from above, the outline of their shape is clearly visible. It would've been nice to be able to change the particle image shape so that the shape of the stars would've been more accurate. 


## Things I Wish the Course Had Done Differently
Going over the noise function in class was really helpful - it helped me figure out the Perlin Noise algorithm a lot more easily, which was great! It also would've been helpful to see how orientation of the scene changed and the other tweaks that needed to be made when plugging in an Oculus headset. The first time I plugged in the headset to test my code, my entire scene was flipped upside down and I hadn't realized that I needed to actually adjust the plane and other scene objects to account for the headset's camera positioning. But overall, even though the project seemed quite daunting at first, I found the Three-js examples and documentation to be quite helpful. 