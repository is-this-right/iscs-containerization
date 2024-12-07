# React App Containerized in Docker and Deployed on Kubernetes (GKE)
***
The app is a React-based clicker counter. It shows a button users can click and displays to the user how many times it has been clicked. It has been containderized using Docker and deployed on Google Kubernetes Engine (GKE).

The app is exposed to the public internet using a LoadBalancer service, making it accessible via a public IP. The Kubernetes manifests in this repo define the necessary resources for deploying the app on GKE, including Pods, Services, and Autoscaling.


## Components:
***
React App (Frontend):
* Built with React and containerized in a Docker image.
* Exposes the app on port 8080 inside the container, which is mapped to port 80 via the Kubernetes service.

Kubernetes Pods:
* Runs the Dockerized React app in two replicas for load balancing and redundancy.

Kubernetes Service:
* A LoadBalancer service that exposes the React app to the internet via a public IP.

Horizontal Pod Autoscaler (HPA):
* autoscales the number of replicas of the app based on CPU usage

## Kubernetes Manifests
***
Service.yaml
This Kubernetes manifest defines the Service resource, which exposes the app as a LoadBalancer service to the outside world.


Deployment.yaml
This manifest defines the Deployment resource, which ensures the React app is running in two pods (initial replicas). The deployment pulls the container image from Docker Hub.


Horizontal Pod Autoscaler (HPA)
This manifest defines the Horizontal Pod Autoscaler (HPA), which automatically adjusts the number of pod replicas based on CPU utilization.

  

## Deployment Process
Push the Docker image
`docker push nicknitride/containerization-app-simple`

Step 3: Create GKE Cluster

Create a Google Cloud Project
Enable Kubernetes Engine API in the Google Cloud Console.
Create a GKE Cluster. In our case, we used the GUI of Google Cloud Console

Configure kubectl to use the cluster:

gcloud container clusters get-credentials my-cluster --zone us-central1-a

Nano the yaml files in Google Cloud Console
Apply Kubernetes Manifests:
`kubectl apply -f deployment.yaml`
`kubectl apply -f service.yaml`
`kubectl apply -f hpa.yaml`

Open the app on the browser via the [link](http://34.101.166.26)