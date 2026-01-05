# Implementation Plan: Grid Layout Fix

## Overview

This plan restores the Swiss-style wireframe aesthetic by making vertical guide-lines visible across the entire page. The approach raises the dividers' z-index above section backgrounds while ensuring content elements appear above the lines.

## Tasks

- [x] 1. Update VerticalDividers component
  - [x] 1.1 Change z-index from z-0 to z-10
    - Update the container class from `z-0` to `z-10`
    - This ensures lines appear above section backgrounds
    - _Requirements: 1.4, 2.1_
  - [x] 1.2 Update line color to subtle #DEDADA
    - Change `bg-border` to `bg-[#F0EEE8]` on all three lines
    - This creates professional guide-line appearance
    - _Requirements: 1.3, 5.1_

- [ ] 2. Update HeroSection for proper alignment
  - [x] 2.1 Ensure grid uses 30%/70% split aligned with middle divider
    - Verify grid template is `grid-cols-1 lg:grid-cols-[30%_70%]`
    - Left column (image) should align with middle line
    - _Requirements: 3.1, 3.2, 3.3_
  - [x] 2.2 Add z-20 to content elements
    - Add `relative z-20` to text and image containers
    - Ensures content appears above the guide-lines
    - _Requirements: 2.2_

- [ ] 3. Update content sections with z-20 for content elements
  - [x] 3.1 Update WorkSection content elements
    - Add `relative z-20` to cards and text content
    - _Requirements: 2.2_
  - [x] 3.2 Update ServicesSection content elements
    - Add `relative z-20` to service cards
    - _Requirements: 2.2_
  - [x] 3.3 Update TestimonialsSection content elements
    - Add `relative z-20` to testimonial content
    - _Requirements: 2.2_
  - [ ] 3.4 Update AboutSection content elements
    - Add `relative z-20` to about content
    - _Requirements: 2.2_
  - [ ] 3.5 Update remaining sections (FAQ, Blog, Contact, Stats, WhyUs, Logos)
    - Add `relative z-20` to content elements in each section
    - _Requirements: 2.2_

- [ ] 4. Checkpoint - Visual verification
  - Verify three vertical lines are visible across entire page
  - Verify lines use subtle #DEDADA color
  - Verify lines appear above section backgrounds
  - Verify content (text, images, cards) appears above lines
  - Verify Hero section middle line separates image from text
  - Test responsive behavior (middle line hidden on mobile)
  - Ask the user if questions arise

## Notes

- The key fix is raising VerticalDividers from z-0 to z-10
- Content elements need z-20 to appear above the lines
- Line color #E5E5E5 provides subtle, professional appearance
- Each task references specific requirements for traceability
