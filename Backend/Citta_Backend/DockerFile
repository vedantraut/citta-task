# Use Java 17 image
FROM eclipse-temurin:17-jdk

# Set working directory inside container
WORKDIR /app

# Copy project files
COPY . .

# Build the Spring Boot application
RUN ./mvnw clean package -DskipTests

# Expose application port
EXPOSE 8080

# Run the application
CMD ["java", "-jar", "target/*.jar"]
#####