# Project Context - Authenti IDP

**Last Updated: August 2025**

## Strategic Overview

### Project Mission
Authenti IDP is a cost-conscious authentication service designed to provide zero-cost authentication for small-scale applications (<100 users) while maintaining enterprise-grade security and ease of integration.

### Primary Value Proposition
- **Zero-cost authentication** for <100 users (vs Auth0/Okta pricing)
- **Target Market**: Solo developers and personal projects (not enterprise initially)
- **Competitive Advantage**: Cost efficiency + simple integration + data ownership
- **Market Entry**: MVP-first approach with clear enterprise expansion path

## Critical Constraints

### Cost Constraints (PRIMARY)
- **Operational Cost Ceiling**: <$50/month for <100 users
- **Infrastructure**: Free-tier services only (Supabase free, Vercel free)
- **No Premium Services**: Built-in platform features only, no external APM tools

### Timeline & Scope
- **Development Timeline**: 6-month phased approach (not 12 weeks)
- **MVP Focus**: Basic OAuth/OIDC with PKCE only
- **Enterprise Features**: Deferred to post-MVP roadmap

## Architecture Simplifications

### Infrastructure Simplifications
- **Read replicas**: REMOVED - use query optimization and basic indexing instead
- **Multi-cloud abstraction**: DEFERRED - accepted vendor lock-in for MVP
- **Advanced monitoring**: REMOVED - use built-in Supabase/Vercel analytics only
- **Custom infrastructure**: MINIMIZED - leverage platform-managed services

### Security Simplifications
- **Zero-trust architecture**: DEFERRED - basic trust boundaries only
- **Advanced MFA**: DEFERRED - optional TOTP only (no SMS, no WebAuthn yet)
- **Advanced threat detection**: DEFERRED - basic rate limiting and failed login monitoring only

### Frontend Simplifications
- **Multi-framework SDK**: DEFERRED to post-MVP (React, Vue, Angular)
- **Real-time features**: REMOVED (expensive validation, live dashboards)
- **Portal separation**: MERGED developer portal and admin dashboard into single interface

## Technology Stack Constraints

### Free-Tier Service Limits
- **Database**: Supabase PostgreSQL (500MB storage, 2 concurrent connections)
- **Hosting**: Vercel serverless functions (100GB bandwidth, 100 invocations/day)
- **CI/CD**: GitHub Actions (2000 minutes/month build time)
- **Monitoring**: Built-in platform analytics and basic alerting

### Implementation Priorities
1. **Core OAuth/OIDC flows** with PKCE support
2. **Basic user management** (registration, profile, sessions)
3. **Simple API authentication** with JWT tokens
4. **Query optimization** instead of infrastructure scaling
5. **Cost monitoring** and free-tier usage tracking

## Product Strategy

### MVP Strategy
- **Prove zero-cost viability** with basic OAuth/OIDC
- **Solo developer focus** - personal projects and individual developers prioritized
- **Simple integration** - <2 hours developer setup time

### Post-MVP Strategy
- **Layer enterprise features** with pricing tiers
- **Revenue Model**: Free (<100 users) → Pro ($10-25) → Business ($50-100) → Enterprise (custom)
- **Market Validation**: Solo developer satisfaction before enterprise expansion

### Success Metrics
- **Market Position**: Maintain cost advantage against enterprise solutions
- **User Satisfaction**: >90% developer setup success rate
- **Cost Compliance**: 100% of <100 user customers at $0 operational cost
- **Growth Readiness**: Clear path to enterprise features when revenue supports it

## Competitive Differentiation

### vs Auth0/Okta
- Zero cost for small scale, faster setup, data ownership

### vs DIY Auth
- Better security, faster implementation, less maintenance

### vs Social Login Only
- Custom attributes, cross-app insights, own your data

## File Structure

### Product Documentation
- **Vision**: `/docs/product/vision.md` (cost-conscious value proposition)
- **MVP Roadmap**: `/docs/product/roadmap/mvp-roadmap.md` (6-month timeline)
- **Core Epic**: `/docs/product/requirements/epics/core-authentication.md` (simplified)
- **Cost Epic**: `/docs/product/requirements/epics/mvp-cost-management.md`
- **Growth Epic**: `/docs/product/requirements/epics/post-mvp-enhancements.md`

### Architecture Documentation
- **Main Architecture Plan**: `/docs/architecture/architectural-enhancement-plan.md` (SIMPLIFIED)
- **UX Structure**: Journey-based (end-user vs developer journeys)

## Enterprise Features Deferred to Post-MVP

### Security Features
- Multi-factor authentication (MFA) beyond basic TOTP
- Advanced threat detection and anomaly analysis
- Zero-trust network architecture
- Device trust and fingerprinting
- Advanced audit logging and SIEM integration

### Infrastructure Features
- Advanced monitoring and APM tools (DataDog, New Relic)
- Container orchestration (Kubernetes, Docker Swarm)
- Multi-cloud deployment and abstraction layers
- Custom metrics and alerting systems
- Read replicas and horizontal scaling

### Frontend Features
- Multi-framework adapters (React, Vue, Angular)
- Real-time form validation
- Complex analytics and reporting
- Advanced developer tools and debugging
- Separate admin dashboard interface

## Decision Framework

All architectural, implementation, and product decisions must prioritize:
1. **Cost efficiency** and free-tier sustainability
2. **Simple, maintainable solutions** over complex, scalable ones
3. **Solo developer market entry** before enterprise expansion
4. **Platform-managed services** over custom infrastructure
5. **Basic security practices** over advanced enterprise features

**CRITICAL**: This project is fundamentally about proving that high-quality authentication can be delivered at zero cost for small-scale applications while maintaining a clear path to enterprise features when revenue supports it. 