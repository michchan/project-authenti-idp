# 📘 Entity Relationships Guidelines

## 🧭 Purpose
Define data model with entity relationships, ownership boundaries, and access patterns using Entity Relationship Diagrams.

## ✅ Must Include
- **Entity Relationship Diagram**: Visual representation of entities and relationships
- **Data Ownership Map**: Ownership and access control matrix
- **Core Data Entities**: Table format with relationship details
- **Derived Data Relationships**: Table format for aggregated data patterns
- **Configuration and State Relationships**: Table format for configuration dependencies
- **Service Ownership Boundaries**: Table format showing service responsibilities
- **Data Flow Patterns**: Table format for operation flows

## ❌ Avoid Including
- **Purpose sections**: Remove document purpose descriptions
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

### 3. Core Data Entities Table
| Relationship | Cardinality | Referential Integrity | Cascade Behavior | Business Rules |
|-------------|-------------|----------------------|------------------|----------------|
| [Entity A → Entity B] | [1:Many] | [Integrity description] | [ON DELETE CASCADE] | [Business constraints] |

### 4. Derived Data Relationships Table  
| Source → Target | Aggregation Type | Recalculation | Historical Data | Dependencies |
|----------------|------------------|---------------|-----------------|--------------|
| [Entity → Analytics] | [Real-time/Batch] | [When/How] | [Retention policy] | [Dependencies] |

### 5. Configuration and State Relationships Table
| Config Entity → Target | Global Impact | Application | Dependencies |
|------------------------|---------------|-------------|--------------|
| [Config → Entity] | [System-wide effects] | [Specific use] | [Requirements] |

### 6. Service Ownership Boundaries Table
| Service | Full Control | Read Access | Write Authority | Validation |
|---------|--------------|-------------|-----------------|------------|
| [Service Name] | [Owned entities] | [Read permissions] | [Write scope] | [Validation rules] |

### 7. Data Flow Patterns Table
| Pattern Type | Step | Description |
|-------------|------|-------------|
| Write Operations | 1. | Authentication and permission verification |
| | 2. | Validation and business rule enforcement |
| Read Operations | 1. | Authorization and access control |
| | 2. | Query optimization and data transformation |

## 🛠 Tips
- Start with ERD: Visual first, then details
- Focus on logical relationships
- Use standard ERD notation
- Group entities by service ownership
- Convert all relationship sections to tables for clarity
- Include footnote explaining data ownership model
- Highlight cross-boundary relationships
- Use consistent table formatting across all sections
