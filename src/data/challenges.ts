import { Challenge } from '@/types';

export const challenges: Challenge[] = [
  {
    id: 'microservice-communication',
    title: 'Cross-Language Microservice Communication',
    context:
      'Fairness-Checker required a Python-native ML microservice to communicate with a Java Spring Boot backend for real-time scoring.',
    whatFailed:
      'Initial attempts to tightly couple the ML logic inside the Spring Boot app created deployment bottlenecks — Python dependencies conflicted with the Java build pipeline.',
    resolution:
      'Deployed FastAPI as an independent microservice communicating over REST. Each service became independently deployable and version-controlled, resolving the dependency conflicts.',
    lessonLearned:
      'Separation of concerns at the service level is not just a design principle — it directly affects deployment velocity and team autonomy.',
    project: 'Fairness-Checker',
  },
  {
    id: 'class-imbalance',
    title: 'Handling Class Imbalance in Churn Prediction',
    context:
      'The Customer Churn dataset had a significant class imbalance — far fewer churned customers than retained ones, causing the model to underpredict churn.',
    whatFailed:
      'A baseline Random Forest model trained on raw data achieved decent overall accuracy but had a high false-negative rate — missing actual churners.',
    resolution:
      'Applied SMOTE oversampling to balance the training set and tuned the classification threshold, reducing the false-negative rate by 15% while raising accuracy to 82%.',
    lessonLearned:
      'Accuracy alone is a misleading metric for imbalanced datasets. Domain-specific metrics (recall, false-negative rate) matter more than headline accuracy.',
    project: 'Customer Churn Prediction',
  },
  {
    id: 'reconciliation-rules',
    title: 'Extensible Reconciliation Rules Without Core Changes',
    context:
      'The Transaction Reconciliation Engine needed to support new discrepancy types as business rules evolved, without requiring rewrites of the core matching logic.',
    whatFailed:
      'An initial if-else chain for different discrepancy types became unmaintainable after the third rule addition — every new rule required modifying the core validator.',
    resolution:
      'Refactored to the Strategy pattern — each discrepancy type (amount mismatch, duplicate, missing entry) became a plug-in rule class. New rules could be added without touching existing code.',
    lessonLearned:
      'The Strategy pattern turns an unmaintainable conditional chain into a plug-in architecture. Design for extension from day one.',
    project: 'Transaction Reconciliation Engine',
  },
  {
    id: 'jwt-security',
    title: 'Stateless JWT Authentication Across Roles',
    context:
      'Fairness-Checker needed role-based access control for Engineer, Manager, and Admin views — each with different data visibility.',
    whatFailed:
      'An initial session-based approach created sticky-session dependencies that complicated horizontal scaling of the Spring Boot backend.',
    resolution:
      'Implemented stateless JWT authentication via Spring Security filter chain. Roles are encoded in the token, eliminating server-side session state entirely.',
    lessonLearned:
      'Stateless auth is not just a best practice — it is a prerequisite for horizontally scalable microservice architectures.',
    project: 'Fairness-Checker',
  },
];
