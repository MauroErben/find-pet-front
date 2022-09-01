import React, { useState, useRef } from 'react'
import FormHeader from '../FormHeader'
import { useForm } from 'react-hook-form'
import FormErrorMessage from '../FormError'
import createPosts from '../../services/createPosts'

export default function PostForm() {
  const formRef = useRef()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = () => {
    setIsSubmitting(true)
    const formData = new FormData(formRef.current)
    createPosts(formData).then((res) => {
      alert(res.message)
      reset()
      setIsSubmitting(false)
    })
  }

  return (
    <div>
      <div className="w-full border-2 rounded-bl rounded-br md:w-1/4 md:mx-auto">
        <FormHeader
          title="Crea una publicación"
          subtitle="Crea una publicación y llega a miles de usuarios."
        />
        <form
          ref={formRef}
          className="space-y-4 p-2 md:p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Titulo</label>
            <input
              className="appearance-none rounded w-full"
              type="text"
              placeholder="Busco a Firulais"
              {...register('title', { required: true })}
            />
            {errors.title && (
              <FormErrorMessage>Debes ingresar un titulo</FormErrorMessage>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">
              Descripción
            </label>
            <textarea
              className="appearance-none rounded w-full"
              placeholder="Ingresa una descripción"
              {...register('description', { required: true })}
            />
            {errors.description && (
              <FormErrorMessage>
                Debes ingresar una descripción
              </FormErrorMessage>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Celular</label>
            <input
              type="tel"
              className="appearance-none rounded w-full"
              placeholder="Ingresa tu número de contacto"
              {...register('phone', { required: true })}
            />
            {errors.phone && (
              <FormErrorMessage>
                Debes ingresar un número de contacto
              </FormErrorMessage>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Localidad</label>
            <select
              className="appearance-none rounded w-full"
              {...register('location', { required: true })}
            >
              <option>Maipú</option>
              <option>Luján de Cuyo</option>
            </select>
            {errors.location && (
              <FormErrorMessage>Selecciona una localidad</FormErrorMessage>
            )}
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Imagen</label>
            <input
              type="file"
              className="appearance-none rounded w-full"
              {...register('image', { required: true })}
            />
            {errors.image && (
              <FormErrorMessage>Debes cargar una imagen</FormErrorMessage>
            )}
          </div>
          <div className="flex justify-center">
            <button
              className="p-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 disabled:bg-gray-400"
              type="submit"
              disabled={isSubmitting}
            >
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
