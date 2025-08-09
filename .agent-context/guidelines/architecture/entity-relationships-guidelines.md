# 📘 Entity Relationships Guidelines

## 🧭 Purpose
Define data model with entity relationships, ownership boundaries, and access patterns using Entity Relationship Diagrams.

## ✅ Must Include
- **Entity Relationship Diagram**: Visual representation of entities and relationships
- **Data Ownership Map**: Ownership and access control matrix
- **Entity Relationships**: Relationship descriptions with cardinality
- **Service Boundaries**: Ownership and responsibility boundaries
- **Access Control**: Read/write permissions and data flow

## ❌ Avoid Including
- **Storage Details**: Focus on logical relationships, not physical storage
- **Detailed Schemas**: High-level entity structure only
- **Technology Choices**: Storage type indications without vendor lock-in

## 🤔 Why It Matters
- **Visual Clarity**: ERD provides immediate data relationship understanding
- **Service Boundaries**: Clear ownership prevents conflicts and integrity issues
- **Scalability**: Relationship understanding guides system evolution
- **Data Flow**: Clear cross-service communication patterns

## 📐 Structure

### 1. Entity Relationship Diagram
Mermaid ERD showing:
- Entities with primary keys and key attributes
- Relationships with cardinality (1:1, 1:many, many:many)
- Foreign key relationships
- Entity groupings by service ownership

### 2. Data Ownership Map
Table with:
- Entity name and owning service
- Storage approach (type, not technology)
- Access patterns (read/write permissions by service)
- Lifecycle management (creation, updates, deletion)

### 3. Relationships and Dependencies
For each relationship:
- Type and cardinality
- Referential integrity rules
- Cascade behaviors
- Business rule implications

### 4. Service Boundaries
For each service:
- Owned entities and responsibilities
- Read access to other entities
- Write permissions and validation
- Event-driven communication

### 5. Access Control and Data Flow
- Write operation flows across services
- Read operation patterns and permissions
- Cross-service communication mechanisms
- Error isolation and boundary protections

## 🛠 Tips
- Start with ERD: Visual first, then details
- Focus on logical relationships
- Use standard ERD notation
- Group entities by service ownership
- Document relationship rules
- Show derived data clearly
- Include temporal relationships
- Highlight cross-boundary relationships
