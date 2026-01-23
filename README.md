# Library Management System

A modern library management system built with Next.js, TypeScript, and Tailwind CSS. 

## Features

- Book catalog management with search and filtering
- Student management and borrowing limits
- Analytics dashboard with borrowing statistics
- Transaction tracking for book issues and returns
- Responsive design 

## Data Structures and Algorithms Implementation

### Core Data Structures Used

#### 1. **Hash Maps (ES6 Map)**
- **Usage**: `bookMap` and `studentMap` for O(1) lookups by ID
- **Location**: `src/hooks/useLibrary.ts`
- **Purpose**: Efficient retrieval of books and students 

```typescript
const bookMap = useMemo(() => new Map(books.map(b => [b.id, b])), [books]);
const studentMap = useMemo(() => new Map(students.map(s => [s.id, s])), [students]);
```

#### 2. **Arrays**
- **Usage**: Primary storage for books, students, and borrow records
- **Operations**: Filtering, mapping, and sorting operations

#### 3. **Sets**
- **Usage**: Extracting unique categories from books
- **Location**: `src/hooks/useHome.ts`

```typescript
const categories = useMemo(() => ['all', ...new Set(books.map(b => b.category))], [books]);
```

### Algorithms and Complexity Analysis

#### 1. **Book Filtering Algorithm**
- **Time Complexity**: O(n) where n = number of books
- **Space Complexity**: O(1) auxiliary space

```typescript
const filteredBooks = useMemo(() => {
  return books.filter(b => {
    const matchCategory = category === 'all' || b.category === category;
    const matchSearch = b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });
}, [books, category, search]);
```

#### 2. **Overdue Records Detection**
- **Time Complexity**: O(n) 
- **Algorithm**: Date comparison with current date

#### 4. **Book Issuance/Return Operations**
- **Time Complexity**: O(1) for Map lookups + O(n) for array updates
- **Optimizations**: Pre-computed Maps for instant access

### Performance Optimizations

#### Memoization Strategy
- **React.useMemo**: Caches expensive computations
- **Dependencies**: Properly tracked to prevent unnecessary recalculations
- **Benefits**: Prevents redundant filtering and analytics computation on every render

## Technical Stack

- **Framework**: Next.js with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                 # Next.js app router
├── components/
│   ├── feature/        # Main feature components
│   ├── layout/         # Layout components
│   ├── main/          # Main page components
│   └── ui/            # Reusable UI components
├── hooks/              # Custom React hooks with DSA logic
├── types/              # TypeScript type definitions
└── contants/           # Mock data and constants
```

