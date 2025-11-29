import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input, Button } from '../src';

// ============================================
// React Hook Form Examples
// ============================================

/**
 * Example 1: React Hook Form with register (recommended)
 * Most straightforward approach - uses ref forwarding
 */
export const ReactHookFormRegisterExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string;
    username: string;
    password: string;
  }>();

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Email"
        type="email"
        error={errors.email?.message}
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        })}
      />

      <Input
        label="Username"
        error={errors.username?.message}
        {...register('username', {
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username must be at least 3 characters',
          },
        })}
      />

      <Input
        label="Password"
        type="password"
        error={errors.password?.message}
        {...register('password', {
          required: 'Password is required',
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
        })}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

/**
 * Example 2: React Hook Form with Controller
 * Use when you need more control over the component
 */
export const ReactHookFormControllerExample = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<{
    searchQuery: string;
    bio: string;
  }>({
    defaultValues: {
      searchQuery: '',
      bio: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="searchQuery"
        control={control}
        rules={{ required: 'Search query is required' }}
        render={({ field }) => (
          <Input
            label="Search"
            placeholder="Search products..."
            error={errors.searchQuery?.message}
            clearable
            onClear={() => setValue('searchQuery', '')}
            leftIcon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M7 12C9.76142 12 12 9.76142 12 7C12 4.23858 9.76142 2 7 2C4.23858 2 2 4.23858 2 7C2 9.76142 4.23858 12 7 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M11 11L14 14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            }
            {...field}
          />
        )}
      />

      <Controller
        name="bio"
        control={control}
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio must be less than 200 characters',
          },
        }}
        render={({ field }) => (
          <Input
            label="Bio"
            placeholder="Tell us about yourself..."
            error={errors.bio?.message}
            maxLength={200}
            showCount
            {...field}
          />
        )}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

// ============================================
// Formik Examples
// ============================================

/**
 * Example 3: Formik with useFormik hook
 */
export const FormikHookExample = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      age: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      username: Yup.string()
        .min(3, 'Username must be at least 3 characters')
        .required('Username is required'),
      age: Yup.number()
        .positive('Age must be positive')
        .integer('Age must be an integer')
        .required('Age is required'),
    }),
    onSubmit: (values) => {
      console.log('Form data:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        label="Email"
        type="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && formik.errors.email ? formik.errors.email : undefined}
      />

      <Input
        label="Username"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.username && formik.errors.username ? formik.errors.username : undefined
        }
      />

      <Input
        label="Age"
        type="number"
        name="age"
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.age && formik.errors.age ? formik.errors.age : undefined}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

/**
 * Example 4: Formik with getFieldProps (simplified)
 */
export const FormikGetFieldPropsExample = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
        .required('Phone is required'),
    }),
    onSubmit: (values) => {
      console.log('Form data:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        label="First Name"
        error={
          formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : undefined
        }
        {...formik.getFieldProps('firstName')}
      />

      <Input
        label="Last Name"
        error={
          formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : undefined
        }
        {...formik.getFieldProps('lastName')}
      />

      <Input
        label="Phone"
        type="tel"
        placeholder="1234567890"
        error={formik.touched.phone && formik.errors.phone ? formik.errors.phone : undefined}
        {...formik.getFieldProps('phone')}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

// ============================================
// Advanced Examples with Custom Features
// ============================================

/**
 * Example 5: React Hook Form with all Input features
 */
export const AdvancedReactHookFormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      amount: '',
      website: '',
      description: '',
    },
  });

  const amount = watch('amount');

  const onSubmit = (data: any) => {
    console.log('Form data:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Input with prefix and suffix */}
      <Input
        label="Amount"
        type="number"
        prefix="$"
        suffix="USD"
        error={errors.amount?.message}
        {...register('amount', {
          required: 'Amount is required',
          min: {
            value: 0,
            message: 'Amount must be positive',
          },
        })}
      />

      {/* Input with clearable and prefix */}
      <Input
        label="Website"
        type="url"
        prefix="https://"
        clearable
        onClear={() => setValue('website', '')}
        error={errors.website?.message}
        {...register('website', {
          pattern: {
            value: /^[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]+$/,
            message: 'Invalid URL format',
          },
        })}
      />

      {/* Input with character counter */}
      <Input
        label="Description"
        maxLength={500}
        showCount
        error={errors.description?.message}
        helperText="Describe your project in detail"
        {...register('description', {
          required: 'Description is required',
          maxLength: {
            value: 500,
            message: 'Description is too long',
          },
        })}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
};

/**
 * Example 6: Formik with custom validation and all features
 */
export const AdvancedFormikExample = () => {
  const formik = useFormik({
    initialValues: {
      creditCard: '',
      cvv: '',
      notes: '',
    },
    validate: (values) => {
      const errors: any = {};

      if (!values.creditCard) {
        errors.creditCard = 'Credit card is required';
      } else if (!/^[0-9]{16}$/.test(values.creditCard.replace(/\s/g, ''))) {
        errors.creditCard = 'Credit card must be 16 digits';
      }

      if (!values.cvv) {
        errors.cvv = 'CVV is required';
      } else if (!/^[0-9]{3,4}$/.test(values.cvv)) {
        errors.cvv = 'CVV must be 3 or 4 digits';
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log('Form data:', values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        label="Credit Card"
        placeholder="1234 5678 9012 3456"
        leftIcon={
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="2" y="4" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
            <path d="M2 7H14" stroke="currentColor" strokeWidth="2" />
          </svg>
        }
        error={
          formik.touched.creditCard && formik.errors.creditCard
            ? formik.errors.creditCard
            : undefined
        }
        success={
          formik.touched.creditCard && !formik.errors.creditCard && formik.values.creditCard
            ? 'Valid credit card'
            : undefined
        }
        {...formik.getFieldProps('creditCard')}
      />

      <Input
        label="CVV"
        type="password"
        maxLength={4}
        showCount
        error={formik.touched.cvv && formik.errors.cvv ? formik.errors.cvv : undefined}
        {...formik.getFieldProps('cvv')}
      />

      <Input
        label="Notes"
        placeholder="Additional notes..."
        clearable
        onClear={() => formik.setFieldValue('notes', '')}
        helperText="Optional additional information"
        {...formik.getFieldProps('notes')}
      />

      <Button type="submit">Submit Payment</Button>
    </form>
  );
};

/**
 * Usage Notes:
 *
 * 1. React Hook Form (Recommended):
 *    - Use `register()` for simple cases
 *    - Use `Controller` when you need custom clear handlers or complex logic
 *    - The component works perfectly with ref forwarding
 *
 * 2. Formik:
 *    - Use `getFieldProps()` for simplest integration
 *    - Manually pass value, onChange, onBlur for more control
 *    - Error handling requires checking both `touched` and `errors`
 *
 * 3. Both libraries work seamlessly because:
 *    - Input uses forwardRef
 *    - Accepts all native input props
 *    - Supports controlled components (value + onChange)
 *    - Has proper name attribute support
 *
 * 4. Additional features work with both:
 *    - clearable (use setValue or setFieldValue)
 *    - showCount
 *    - prefix/suffix
 *    - leftIcon/rightIcon
 *    - All validation states (error, success)
 */
