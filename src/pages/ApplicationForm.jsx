import React from 'react';
    import { useForm } from 'react-hook-form';

    function ApplicationForm() {
      const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = (data) => {
        console.log(data);
      };

      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center">Application Form</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">Name</label>
              <input type="text" id="name" {...register('name', { required: true })} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
              {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">Email</label>
              <input type="email" id="email" {...register('email', { required: true })} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
              {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="income" className="block text-gray-700 text-sm font-medium mb-1">Income</label>
              <input type="number" id="income" {...register('income', { required: true })} className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-500" />
              {errors.income && <p className="text-red-500 text-sm mt-1">Income is required</p>}
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">
              Submit
            </button>
          </form>
        </div>
      );
    }

    export default ApplicationForm;
