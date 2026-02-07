# ---------- BUILD STAGE ----------
FROM eclipse-temurin:17-jdk AS build

WORKDIR /app

COPY . .

RUN ./mvnw clean package -DskipTests


# ---------- RUNTIME STAGE ----------
FROM eclipse-temurin:17-jre

WORKDIR /app

# Copy the generated jar from build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]