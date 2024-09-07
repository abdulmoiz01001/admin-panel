import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useStore } from '@/store/store';
import Modal from './Modal';

// TypeScript interfaces to match the backend model
interface Quiz {
  question: string;
  options: string[];
  correctAnswer: string;
}

interface Content {
  type: 'video' | 'text' | 'quiz';
  title: string;
  body?: string;
  url?: string;
  quiz?: Quiz[];
}

interface Rating {
  user: string;
  rating: number;
  comment: string;
}

interface CourseFormValues {
  title: string;
  description: string;
  instructor: string;
  studentsEnrolled: string[];
  categories: string[];
  content: Content[];
  price: number;
  ratings: Rating[];
}

const initialValues: CourseFormValues = {
  title: '',
  description: '',
  instructor: '',
  studentsEnrolled: [],
  categories: [''],
  content: [
    {
      type: 'video',
      title: '',
      body: '',
      url: '',
      quiz: [{ question: '', options: [''], correctAnswer: '' }],
    },
  ],
  price: 0,
  ratings: [],
};

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  description: Yup.string().required('Description is required'),
  instructor: Yup.string().required('Instructor is required'),
  categories: Yup.array().of(Yup.string()),
  content: Yup.array().of(
    Yup.object({
      type: Yup.mixed<'video' | 'text' | 'quiz'>().required('Content type is required'),
      title: Yup.string().required('Content title is required'),
      body: Yup.string(),
      url: Yup.string().url('Must be a valid URL'),
      quiz: Yup.array().of(
        Yup.object({
          question: Yup.string(),
          options: Yup.array().of(Yup.string()),
          correctAnswer: Yup.string(),
        })
      ),
    })
  ),
  price: Yup.number().required('Price is required').min(0, 'Price must be a positive number'),
});

const CourseForm = () => {
    
  const openCForm : any = useStore((state: any) => state.openCForm);
  const openCourseForm : any = useStore((state: any) => state.openCourseForm);
  const closeCourseForm : any = useStore((state: any) => state.closeCourseForm);

  useEffect(() => {
    console.log('openCForm:', openCForm);
  }, [openCForm]);

  // Scroll event handler to trigger modal opening
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 300 && !openCForm) {
        openCourseForm();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [openCForm]);

  const closeModal = () => openCourseForm(false);

  const onSubmit = (values: CourseFormValues) => {
    console.log(values);
    // API call to submit course data to the backend
    closeModal();
  };

  return (
    <>
      <Modal isOpen={openCForm} onClose={() => closeCourseForm(false)}>

        <div  className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white h-[80vh] overflow-y-scroll w-full max-w-3xl mx-auto px-4 py-6 rounded-lg shadow-lg relative sm:w-11/12 md:w-9/12 lg:w-7/12">
            <button
              onClick={closeCourseForm}
              className="absolute top-4 right-4 text-xl font-bold text-gray-600 hover:text-gray-800"
              >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">Add New Course</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
              {({ values }) => (
                <Form className="space-y-4">
                  {/* Title */}
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium">
                      Course Title
                    </label>
                    <Field name="title" type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Description */}
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium">
                      Description
                    </label>
                    <Field
                      name="description"
                      as="textarea"
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                      rows={4}
                    />
                    <ErrorMessage name="description" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Instructor */}
                  <div>
                    <label htmlFor="instructor" className="block text-sm font-medium">
                      Instructor
                    </label>
                    <Field name="instructor" type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    <ErrorMessage name="instructor" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Categories */}
                  <div>
                    <label htmlFor="categories" className="block text-sm font-medium">
                      Categories
                    </label>
                    <FieldArray name="categories">
                      {({ push, remove }) => (
                        <div>
                          {values.categories.map((category, index) => (
                              <div key={index} className="flex items-center space-x-2">
                              <Field
                                name={`categories.${index}`}
                                type="text"
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                />
                              <button
                                type="button"
                                onClick={() => remove(index)}
                                className="text-red-500"
                                >
                                Remove
                              </button>
                            </div>
                          ))}
                          <button
                            type="button"
                            onClick={() => push('')}
                            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
                            >
                            Add Category
                          </button>
                        </div>
                      )}
                    </FieldArray>
                    <ErrorMessage name="categories" component="div" className="text-red-500 text-sm" />
                  </div>

                  {/* Content */}
                  <FieldArray name="content">
                    {({ push, remove }) => (
                        <div>
                        {values.content.map((_, index) => (
                          <div key={index} className="space-y-2">
                            <div>
                              <label htmlFor={`content.${index}.type`} className="block text-sm font-medium">
                                Type
                              </label>
                              <Field
                                as="select"
                                name={`content.${index}.type`}
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                >
                                <option value="">Select Type</option>
                                <option value="video">Video</option>
                                <option value="text">Text</option>
                                <option value="quiz">Quiz</option>
                              </Field>
                              <ErrorMessage name={`content.${index}.type`} component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                              <label htmlFor={`content.${index}.title`} className="block text-sm font-medium">
                                Content Title
                              </label>
                              <Field
                                name={`content.${index}.title`}
                                type="text"
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                />
                              <ErrorMessage name={`content.${index}.title`} component="div" className="text-red-500 text-sm" />
                            </div>
                            <div>
                              <label htmlFor={`content.${index}.url`} className="block text-sm font-medium">
                                URL
                              </label>
                              <Field
                                name={`content.${index}.url`}
                                type="url"
                                className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
                                />
                              <ErrorMessage name={`content.${index}.url`} component="div" className="text-red-500 text-sm" />
                            </div>
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="text-red-500"
                              >
                              Remove Content
                            </button>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() => push({ type: '', title: '', body: '', url: '', quiz: [] })}
                          className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
                          >
                          Add Content
                        </button>
                      </div>
                    )}
                  </FieldArray>

                  {/* Price */}
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium">
                      Price
                    </label>
                    <Field name="price" type="number" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
                    <ErrorMessage name="price" component="div" className="text-red-500 text-sm" />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
                    >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
    
              </Modal>
    </>
  );
};

export default CourseForm;
