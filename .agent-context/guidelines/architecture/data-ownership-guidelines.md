# 📘 Data ownership guidelines

## 🧭 Purpose
Clarify which service owns each data entity, who can read/write, and where it is stored.

## ✅ Must Include
- Data model/entity name
- Owning service
- Storage (SQL, NoSQL, object store, cache)
- Access policies (write, read-only, shared)
- Lifecycle notes (create, archive, delete)

## 🤔 Why It Matters
- Prevents overlapping writes and schema drift
- Enables secure and clean service boundaries
- Informs caching and replication strategy

## 📐 How To Structure It
1. **Ownership Table**  
   | Entity | Owner | Storage | Read Access | Write Access | Notes |
2. **Lifecycle Descriptions**  
   - How is it created/updated/deleted
3. **Sharing Cases**  
   - If multiple services read/write, why?

## 🛠 Tips
- Be cautious about shared write ownership
- Annotate access levels (internal, public, 3rd-party)
- Flag denormalization or duplication patterns
