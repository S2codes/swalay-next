// components/TrackForm.js
"use client";

import {trackFormSchema} from '../schemas/trackForm'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';

const TrackForm = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: zodResolver(trackFormSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 max-w-lg mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="trackTitle">Track Title</label>
        <Controller
          name="trackTitle"
          control={control}
          render={({ field }) => (
            <input {...field} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
          )}
        />
        {errors.trackTitle && <p className="text-red-500 text-sm">{errors.trackTitle.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="trackCategory">Track Category</label>
        <Controller
          name="trackCategory"
          control={control}
          render={({ field }) => (
            <input {...field} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
          )}
        />
        {errors.trackCategory && <p className="text-red-500 text-sm">{errors.trackCategory.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="audioFile">Audio File</label>
        <Controller
          name="audioFile"
          control={control}
          render={({ field }) => (
            <input type="file" {...field} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
          )}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="callerTuneDate">Caller Tune Date</label>
        <Controller
          name="callerTuneDate"
          control={control}
          render={({ field }) => (
            <input type="date" {...field} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
          )}
        />
        {errors.callerTuneDate && <p className="text-red-500 text-sm">{errors.callerTuneDate.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="trackType">Track Type</label>
        <Controller
          name="trackType"
          control={control}
          render={({ field }) => (
            <input {...field} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
          )}
        />
        {errors.trackType && <p className="text-red-500 text-sm">{errors.trackType.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Track Artist(s) - Primary</label>
        {control._formValues.trackArtistsPrimary.map((_, index) => (
          <div key={index} className="mt-1 flex space-x-2">
            <Controller
              name={`trackArtistsPrimary[${index}]`}
              control={control}
              render={({ field }) => (
                <input {...field} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
              )}
            />
            {errors.trackArtistsPrimary && errors.trackArtistsPrimary[index] && <p className="text-red-500 text-sm">{errors.trackArtistsPrimary[index].message}</p>}
            <button type="button" onClick={() => control.setValue('trackArtistsPrimary', [...control._formValues.trackArtistsPrimary, ''])} className="px-3 py-2 bg-blue-500 text-white rounded-md shadow-sm">+</button>
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700" htmlFor="version">Version</label>
        <Controller
          name="version"
          control={control}
          render={({ field }) => (
            <input {...field} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
          )}
        />
        {errors.version && <p className="text-red-500 text-sm">{errors.version.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Track Artist(s) - Producer</label>
        {control._formValues.trackArtistsProducer.map((_, index) => (
          <div key={index} className="mt-1 flex space-x-2">
            <Controller
              name={`trackArtistsProducer[${index}]`}
              control={control}
              render={({ field }) => (
                <input {...field} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
              )}
            />
            {errors.trackArtistsProducer && errors.trackArtistsProducer[index] && <p className="text-red-500 text-sm">{errors.trackArtistsProducer[index].message}</p>}
            <button type="button" onClick={() => control.setValue('trackArtistsProducer', [...control._formValues.trackArtistsProducer, ''])} className="px-3 py-2 bg-blue-500 text-white rounded-md shadow-sm">+</button>
          </div>
        ))}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Composer</label>
        {control._formValues.composers.map((composer, index) => (
          <div key={index} className="mt-1 space-y-2">
            <Controller
              name={`composers[${index}].name`}
              control={control}
              render={({ field }) => (
                <input placeholder="Composer Name" {...field} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
              )}
            />
            {errors.composers && errors.composers[index]?.name && <p className="text-red-500 text-sm">{errors.composers[index].name.message}</p>}
            <Controller
              name={`composers[${index}].ipiNumber`}
              control={control}
              render={({ field }) => (
                <input placeholder="IPI Number (Optional)" {...field} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
              )}
            />
            <div className="flex items-center space-x-2">
              <label className="block text-sm font-medium text-gray-700" htmlFor={`composers[${index}].iprsNumber`}>IPRS Number</label>
              <Controller
                name={`composers[${index}].iprsNumber`}
                control={control}
                render={({ field }) => (
                  <select {...field} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                )}
              />
            </div>
            <Controller
              name={`composers[${index}].role`}
              control={control}
              render={({ field }) => (
                <input placeholder="Role" {...field} className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
              )}
            />
            {errors.composers && errors.composers[index]?.role && <p className="text-red-500 text-sm">{errors.composers[index].role.message}</p>}
          </div>
        ))}
        <button type="button" onClick={() => control.setValue('composers', [...control._formValues.composers, { name: '', ipiNumber: '', iprsNumber: 'no', role: '' }])} className="px-3 py-2 bg-blue-500 text-white rounded-md shadow-sm">+</button>
      </div>

      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md shadow-sm">Submit</button>
    </form>
  );
};

export default TrackForm;
