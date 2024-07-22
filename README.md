# KafkaJS Node.js Project

## Table of Contents
- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project demonstrates a simple implementation of Apache Kafka using Node.js and the KafkaJS library. It includes a producer that sends messages to a Kafka topic and a consumer that reads messages from the topic.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed [Node.js](https://nodejs.org/) (which includes npm)
- You have installed [Apache Kafka](https://kafka.apache.org/quickstart)

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/kafkajs-nodejs-project.git
    cd kafkajs-nodejs-project
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

## Configuration

1. **Kafka Configuration:**

    Ensure your Kafka server is running by starting ZooKeeper and the Kafka server. 

    ```bash
    # Start ZooKeeper
    bin/zookeeper-server-start.sh config/zookeeper.properties

    # Start Kafka server
    bin/kafka-server-start.sh config/server.properties
    ```

2. **Project Configuration:**

    Update the configuration file (`config.js`) with your Kafka broker details.

    ```javascript
    module.exports = {
        kafkaBroker: 'localhost:9092',
        topic: 'your-topic-name',
        clientId: 'your-client-id',
    };
    ```

## Running the Project

1. **Start the producer:**

    ```bash
    node producer.js
    ```

2. **Start the consumer:**

    ```bash
    node consumer.js
    ```

## Project Output : 
![Screenshot (169)](https://github.com/user-attachments/assets/c48e6fa7-3293-46ef-9715-5f47ea157399)
![Screenshot (170)](https://github.com/user-attachments/assets/8d2e59c0-5480-4709-a05c-3226d75419bd)


