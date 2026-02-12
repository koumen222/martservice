const FormContainer = ({ title, subtitle, children, maxWidth = "md" }) => {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md", 
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl"
  };

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className={`${maxWidthClasses[maxWidth]} w-full`}>
        <div className="bg-white shadow-xl rounded-2xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-2">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600">
                {subtitle}
              </p>
            )}
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
