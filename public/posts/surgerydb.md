# Blog in progress.

## They did surgery on a grape!

Do people still remember that [meme](https://www.youtube.com/watch?v=KNHgeykDXFw&t=1s)? For the uninitiated, this meme spawned from a video filmed at Edward Hospital, where surgeons demonstrate the precision and delicacy with which they could peel the skin off a grape using the da Vinci Si Surgical System.

I was reminded of this meme after a two hour long working session where my manager and I fixed a broken production application. 

Earlier that morning, our [Harbor](https://goharbor.io/) instance crashed. We determined the cause to be due to a non unique version tag used in the deployment manifest.

Usually, if one of the pods crashes, Kubernetes would restart it. The image it pulled would be identical to the images used in the other pods in its deployment.

// Continue describing problem

## We did surgery on a database!

// Describe solution