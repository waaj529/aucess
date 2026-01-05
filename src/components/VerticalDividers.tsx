const VerticalDividers = () => {
  return (
    <>
      {/* Fixed 3-line grid system - spans full viewport height */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{ top: '80px' }}
      >
        <div className="relative h-full mx-6 md:mx-12">
          {/* Line 1: Left margin border */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          {/* Line 2: Middle divider - divides left column (30%) from right column (70%) */}
          <div className="absolute left-[30%] top-0 bottom-0 w-px bg-border hidden lg:block" />

          {/* Line 3: Right margin border */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-border" />
        </div>
      </div>
    </>
  );
};

export default VerticalDividers;
