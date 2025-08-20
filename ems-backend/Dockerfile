# Use official OpenJDK 17 image
FROM openjdk:21-jdk-slim


# Set working directory
WORKDIR /app

# Copy Maven wrapper and pom files
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# Make mvnw executable
RUN chmod +x mvnw

# Build the project
RUN ./mvnw clean package -DskipTests

# Expose port
EXPOSE 8080

# Run the JAR
CMD ["java", "-jar", "target/ems-backend-0.0.1-SNAPSHOT.jar"]
