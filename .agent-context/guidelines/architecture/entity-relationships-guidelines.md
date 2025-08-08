# 📘 Entity Relationships Guidelines

## 🧭 Purpose
Define the data model with entity relationships, ownership boundaries, and access patterns using an Entity Relationship Diagram approach.

## ✅ Must Include
- **Entity Relationship Diagram**: Visual representation of all entities and their relationships
- **Data Ownership Map**: Clear ownership and access control matrix
- **Entity Relationships**: Detailed relationship descriptions with cardinality
- **Service Boundaries**: Clear ownership and responsibility boundaries
- **Access Control**: Read/write permissions and data flow patterns

## ❌ Avoid Including
- **Implementation-specific Storage Details**: Focus on logical relationships, not physical storage
- **Detailed Schema Definitions**: High-level entity structure only
- **Specific Technology Choices**: Storage type indications without vendor lock-in

## 🤔 Why It Matters
- **Visual Clarity**: ERD provides immediate understanding of data relationships
- **Service Boundaries**: Clear ownership prevents data conflicts and integrity issues
- **Scalability Planning**: Relationship understanding guides future system evolution
- **Data Flow Understanding**: Clear patterns for cross-service communication

## 📐 How To Structure It

### 1. Entity Relationship Diagram
Start with a mermaid ERD showing:
- **All entities** with primary keys and key attributes
- **Relationships** with proper cardinality (one-to-one, one-to-many, many-to-many)
- **Foreign key relationships** clearly marked
- **Entity groupings** that reflect service ownership

### 2. Data Ownership Map
Create a table with:
- **Entity name** and owning service
- **Storage approach** (type, not specific technology)
- **Access patterns** (read/write permissions by service)
- **Lifecycle management** (creation, updates, deletion rules)

### 3. Entity Relationships and Dependencies
For each significant relationship, describe:
- **Relationship type** and cardinality
- **Referential integrity** rules
- **Cascade behaviors** for updates and deletes
- **Business rule implications**

### 4. Service Ownership Boundaries
Define for each service:
- **Owned entities** and full control responsibilities
- **Read access** to other service entities
- **Write permissions** and validation rules
- **Event-driven communication** patterns

### 5. Access Control and Data Flow
Document:
- **Write operation flows** across services
- **Read operation patterns** and permissions
- **Cross-service communication** mechanisms
- **Error isolation** and boundary protections

## 🛠 Tips
- **Start with the ERD**: Visual relationships first, then detailed descriptions
- **Focus on logical relationships**: Avoid implementation details
- **Use standard ERD notation**: Primary keys, foreign keys, cardinality symbols
- **Group related entities**: Show service ownership through visual grouping
- **Document relationship rules**: Especially cascade behaviors and integrity constraints
- **Show derived data clearly**: Distinguish calculated/aggregated data from source data
- **Include temporal relationships**: Show how entities evolve over time
- **Highlight cross-boundary relationships**: Mark relationships that span service boundaries
