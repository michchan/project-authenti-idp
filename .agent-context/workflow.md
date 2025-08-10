# V2 workflow

# Table of Contents

- [V2 workflow](#v2-workflow)
- [Table of Contents](#table-of-contents)
- [Constants](#constants)
- [Background](#background)
- [Stage 1 - PRD Definition with UX design](#stage-1---prd-definition-with-ux-design)
  - [1. From an idea to a PRD draft](#1-from-an-idea-to-a-prd-draft)
  - [2. PRD review by stakeholders and amendment](#2-prd-review-by-stakeholders-and-amendment)
  - [3. UX design draft](#3-ux-design-draft)
  - [4. UX design review and amendment](#4-ux-design-review-and-amendment)
  - [5. Update PRD status and link of the UX design](#5-update-prd-status-and-link-of-the-ux-design)
  - [6. Business owner’s review and approval of the PRD](#6-business-owners-review-and-approval-of-the-prd)
- [Stage 2 -  UI Design, stories and system design](#stage-2----ui-design-stories-and-system-design)
  - [7. Stories definition, UI design and System design draft](#7-stories-definition-ui-design-and-system-design-draft)
  - [8. Review stories, UI design and System design by stakeholders and amendment](#8-review-stories-ui-design-and-system-design-by-stakeholders-and-amendment)
  - [9. Finalize stories](#9-finalize-stories)
  - [10. Groom engineers with the stories](#10-groom-engineers-with-the-stories)

# Constants

Below constants will be used as references in below workflow guides.

- `AGENT_CONTEXT_LOCATION` ****= `.agent-context`

- `EXAMPLE_PROJECT_LOCATION` = `{AGENT_CONTEXT_LOCATION}/examples/task-master-project`
- `TEMPLATES_LOCATION` = `{AGENT_CONTEXT_LOCATION}/templates`
- `GUIDELINES_LOCATION` = `{AGENT_CONTEXT_LOCATION}/guidelines`

- `PRD_TEMPLATE` = `{TEMPLATES_LOCATION}/product/PRD-[version].md`
- `PRD_GUIDELINES` = `{GUIDELINES_LOCATION}/product/prd-guidelines.md`
- `PRD_FINAL_EXAMPLE` = `{EXAMPLE_PROJECT_LOCATION}/docs/v1/PRD-1.0-final.md`
- `EPIC_TEMPLATE` = `{TEMPLATES_LOCATION}/product/[version]-epic-[name].md`
- `EPIC_GUIDELINES` = `{GUIDELINES_LOCATION}/product/epic-guidelines.md`
- `EPIC_EXAMPLE` = `{EXAMPLE_PROJECT_LOCATION}/docs/v1/epics/1.0-epic-task-management.md`

- `USER_JOURNEYS_TEMPLATE` = `{TEMPLATES_LOCATION}/ui-ux/user-journeys-[version].md`
- `USER_JOURNEYS_GUIDELINES` = `{GUIDELINES_LOCATION}/ui-ux/user-journeys-guidelines.md`
- `USER_JOURNEYS_EXAMPLE` = `{EXAMPLE_PROJECT_LOCATION}/docs/v1/ui-ux/user-journeys-1.0.md`
- `WIREFRAME_TEMPLATE` = `{TEMPLATES_LOCATION}/ui-ux/wireframes-[version].md`
- `WIREFRAME_GUIDELINES` = `{GUIDELINES_LOCATION}/ui-ux/wireframes-guidelines.md`
- `WIREFRAME_EXAMPLE` = `{EXAMPLE_PROJECT_LOCATION}/docs/v1/ui-ux/wireframes-1.0.md` 


- `UI_DESIGN_SYSTEM_TEMPLATE` = `{TEMPLATES_LOCATION}/ui-ux/ui-design-system-[version].md`
- `UI_DESIGN_SYSTEM_GUIDELINES` = `{GUIDELINES_LOCATION}/ui-ux/ui-design-system-guidelines.md`
- `UI_DESIGN_SYSTEM_EXAMPLE` = `{EXAMPLE_PROJECT_LOCATION}/docs/v1/ui-ux/ui-design-system-1.0.md`
- `UI_COMPONENT_LIBRARY_TEMPLATE` = `{TEMPLATES_LOCATION}/ui-ux/ui-component-library-[version].md`
- `UI_COMPONENT_LIBRARY_GUIDELINES` = `{GUIDELINES_LOCATION}/ui-ux/ui-component-library-guidelines.md`
- `UI_COMPONENT_LIBRARY_EXAMPLE` = `{EXAMPLE_PROJECT_LOCATION}/docs/v1/ui-ux/ui-component-library-1.0.md`
- `UI_MOCKUP_GUIDELINES` = `{GUIDELINES_LOCATION}/ui-ux/ui-mockup-guidelines.md`
- `UI_MOCKUP_EXAMPLE` = `{EXAMPLE_PROJECT_LOCATION}/docs/v1/ui-ux/mockups`

- `SYSTEM_ARCHITECTURE_TEMPLATE` = `{TEMPLATES_LOCATION}/architecture/system-architecture-[version].md`
- `SYSTEM_ARCHITECTURE_GUIDELINES` = `{GUIDELINES_LOCATION}/architecture/system-architecture-guidelines.md`
- `SYSTEM_ARCHITECTURE_EXAMPLE` = `{EXAMPLE_PROJECT_LOCATION}/docs/v1/architecture/system-architecture-1.0.md`
- `SERVICE_RESPONSIBILITIES_TEMPLATE` = `{TEMPLATES_LOCATION}/architecture/service-responsibilities-[version].md`
- `SERVICE_RESPONSIBILITIES_GUIDELINES` = `{GUIDELINES_LOCATION}/architecture/service-responsibilities-guidelines.md`
- `SERVICE_RESPONSIBILITIES_EXAMPLE` = `{EXAMPLE_PROJECT_LOCATION}/docs/v1/architecture/service-responsibilities-1.0.md`
- `SYSTEM_FLOWS_TEMPLATE` = `{TEMPLATES_LOCATION}/architecture/system-flow-[version]-[flow-name].md`
- `SYSTEM_FLOWS_GUIDELINES` = `{GUIDELINES_LOCATION}/architecture/system-flows-guidelines.md`
- `SYSTEM_FLOWS_EXAMPLE` = `{EXAMPLE_PROJECT_LOCATION}/docs/v1/architecture/flows/1.0-task-creation-flow.md`
- `DATA_OWNERSHIP_TEMPLATE` = `{TEMPLATES_LOCATION}/architecture/entity-relationships-[version].md`
- `DATA_OWNERSHIP_GUIDELINES` = `{GUIDELINES_LOCATION}/architecture/data-ownership-guidelines.md`
- `DATA_OWNERSHIP_EXAMPLE` = `{EXAMPLE_PROJECT_LOCATION}/docs/v1/architecture/entity-relationships-1.0.md`
- `DEPLOYMENT_PLAN_TEMPLATE` = `{TEMPLATES_LOCATION}/architecture/deployment-plan-[version].md`
- `DEPLOYMENT_PLAN_GUIDELINES` = `{GUIDELINES_LOCATION}/architecture/deployment-plan-guidelines.md`
- `DEPLOYMENT_PLAN_EXAMPLE` = `{EXAMPLE_PROJECT_LOCATION}/docs/v1/architecture/deployment-plan-1.0.md`
- `THREAD_MODEL_TEMPLATE` = `{TEMPLATES_LOCATION}/architecture/[version]-[flow-name]-thread-model.md`
- `THREAD_MODEL_GUIDELINES` = `{GUIDELINES_LOCATION}/architecture/thread-model-guidelines.md`
- `THREAD_MODEL_EXAMPLE` = `{EXAMPLE_PROJECT_LOCATION}/docs/v1/architecture/1.0-user-authentication-thread-model.md`

# Background

- Given the **business owner,** is who sends prompt to the agents.
- The version of the template filename is the version of the product requirement. It should follow `[major].[minor]` version format, .e.g `1.0`.
- However, each major version should only have one folder under the `/docs` folder, e.g. `/docs/v1`.
- The folder structure of the documentation should follow `EXAMPLE_PROJECT_LOCATION` , you should mimic that structure **under the root directory of the current repository**.

# Stage 1 - PRD Definition with UX design

## 1. From an idea to a PRD draft

Given an idea from scratch / about enhancement/update of an existing product, **product manager** needs to draft the PRD document.

The PRD document should be drafted based on:

- `PRD_TEMPLATE` as the template
- `PRD_GUIDELINES` as the guidelines
- `PRD_FINAL_EXAMPLE` as the example (final version)

Leave section as pending if that is to be completed by another team member, like the UX design reference link.

## 2. PRD review by stakeholders and amendment

Given the drafted PRD document, update the status to **In Review**. 

It should be reviewed by:

- **System Architect** - to see if there is any high level technical constraints which requires adjustment to the requirements,
- **Product owner** - to see if the features match the goals and are feasible, whether the metrics / KPIs / Timeline are realistic

After getting reviewed by these stakeholders, **product manager** to ****summarize and update the PRD.

***Until all the stakeholders are fine with the PRD, repeat the above process.***

## 3. UX design draft

**UX designer** to design the

1. *user journeys flow charts* and 
2. *wireframes* draft.

The *user journeys flow charts* should be drafted based on:

- `USER_JOURNEYS_TEMPLATE` as the template
- `USER_JOURNEYS_GUIDELINES` as the guidelines
- `USER_JOURNEYS_EXAMPLE` as the example

The *wireframes* should be drafted based on:

- `WIREFRAME_TEMPLATE` as the template
- `WIREFRAME_GUIDELINES` as the guidelines
- `WIREFRAME_EXAMPLE` as the example

## 4. UX design review and amendment

Given the UX design documents drafted, **product manager** to review and give comments.

Then **UX designer** to amend and update accordingly.

***Until product manager is fine with the UX design, repeat the above process.***

## 5. Update PRD status and link of the UX design

**Product manager** to update the status and link of the UX design

## 6. Business owner’s review and approval of the PRD

Ask the **business owner**’s review and approve the PRD. Once it is approved, update the document status to ***Final***.

Otherwise, make changes as instructed by the **business owner.**

---

# Stage 2 -  UI Design, stories and system design

## 7. Stories definition, UI design and System design draft

The following parts work in parallel.

- **Product owner** to create epics and stories under each epic.
The **epics **should be drafted based on:
    - `EPIC_TEMPLATE` as the template
    - `EPIC_GUIDELINES` as the guidelines
    - `EPIC_EXAMPLE` as the example
  
- **UI designer** to create UI design draft including:
    1. **UI design system** - should be drafted based on:
        - `UI_DESIGN_SYSTEM_TEMPLATE` as the template
        - `UI_DESIGN_SYSTEM_GUIDELINES` as the guidelines
        - `UI_DESIGN_SYSTEM_EXAMPLE` as the example
    2. **UI component library** - should be drafted based on:
     - `UI_COMPONENT_LIBRARY_TEMPLATE` as the template
        - `UI_COMPONENT_LIBRARY_GUIDELINES` as the guidelines
        - `UI_COMPONENT_LIBRARY_EXAMPLE` as the example
    3. **High-Fidelity UI mockup in html** - should be drafted based on:
        - `UI_MOCKUP_GUIDELINES` as the guidelines
        - `UI_MOCKUP_EXAMPLE` as the example
    
- **System Architect** to create system design draft including:
    1. **System architecture** - should be drafted based on:
        - `SYSTEM_ARCHITECTURE_TEMPLATE` as the template
        - `SYSTEM_ARCHITECTURE_GUIDELINES` as the guidelines
        - `SYSTEM_ARCHITECTURE_EXAMPLE` as the example
    2. **Service responsibilities** - should be drafted based on:
        - `SERVICE_RESPONSIBILITIES_TEMPLATE` as the template
        - `SERVICE_RESPONSIBILITIES_GUIDELINES` as the guidelines
        - `SERVICE_RESPONSIBILITIES_EXAMPLE` as the example
    3. **System flows for each key user journey** - should be drafted based on:
        - `SYSTEM_FLOWS_TEMPLATE` as the template
        - `SYSTEM_FLOWS_GUIDELINES` as the guidelines
        - `SYSTEM_FLOWS_EXAMPLE` as the example
    4. **Data ownership** - should be drafted based on:
        - `DATA_OWNERSHIP_TEMPLATE` as the template
        - `DATA_OWNERSHIP_GUIDELINES` as the guidelines
        - `DATA_OWNERSHIP_EXAMPLE` as the example
    5. **Deployment plan** - should be drafted based on:
        - `DEPLOYMENT_PLAN_TEMPLATE` as the template
        - `DEPLOYMENT_PLAN_GUIDELINES` as the guidelines
        - `DEPLOYMENT_PLAN_EXAMPLE` as the example

- **Security Expert** to create security documentation including:
    1. **Threat model** - should be drafted based on:
        - `THREAD_MODEL_TEMPLATE` as the template
        - `THREAD_MODEL_GUIDELINES` as the guidelines
        - `THREAD_MODEL_EXAMPLE` as the example

## 8. Review stories, UI design and System design by stakeholders and amendment

**UI Designer** to update the design reference links in the related epic(s).
**System architect** to attach system design reference links in the related epic(s). Consider anything under `/architecture`.

The following parts work in parallel.

- **Product owner** and **UX Designer** to review the UI design deliverables and also alignment with the stories.
- **Frontend engineer** to review the feasibility of the UI design.
- **Product owner, UX Designer** and **Engineer** to review the deliverables by **System architect**.
- **System architect** to review the deliverables by **Security Expert**.
- **Engineers** to review epics and stories.

***Until all the stakeholders are fine with the documents, repeat the above process.***

## 9. Finalize stories

TBC

## 10. Groom engineers with the stories

TBC

---