/* eslint-disable react/prop-types */


const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="md:w-4/12 text-center my-8 mx-auto">
            <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
            <p className="text-3xl uppercase border-y-2 py-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;