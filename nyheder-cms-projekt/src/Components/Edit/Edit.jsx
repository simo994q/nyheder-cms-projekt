import style from './Edit.module.scss'
import { useParams } from 'react-router-dom'
import { getOneArticle } from '../../queries/getOneArticle'
import { useQuery } from "@tanstack/react-query"
import { request } from 'graphql-request'
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useRef } from 'react'

export const Edit = () => {

    const { id } = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ['allArticles'],
        queryFn: async () => request(`https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clnij52rt05rg01ue9cvq8ycn/master`, getOneArticle, { artId: `${id}` })
    })

    if (isLoading) console.log('Loading...');

    if (error) console.log(error.message);

    const editorRef = useRef(null);
    const save = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent())
            setNewText(editorRef.current.getContent())
            setSaved(true)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(newTitle);
    }

    const [newTitle, setNewTitle] = useState()
    const [newCatcher, setNewCatcher] = useState()
    const [newDate, setNewDate] = useState()
    const [newAuthor, setNewAuthor] = useState()
    const [newText, setNewText] = useState()
    const [saved, setSaved] = useState(false)
    const [newImage, setNewImage] = useState()
    const [newCategory, setNewCategory] = useState()

    return (
        <>
            <div className={style.editContainer}>
                <div className={style.editContent}>
                    <h2>Rediger</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <label htmlFor="Title">Titel: "{data?.articles[0].title}"</label>
                        <input placeholder='Ny titel' className={style.inputField} onChange={(e) => setNewTitle(e.target.value)} />
                        <label htmlFor="">Beskrivelse: "{data?.articles[0].catcher}"</label>
                        <input placeholder='Ny beskrivelse' className={style.inputField} onChange={(e) => setNewCatcher(e.target.value)} />
                        <label htmlFor="">Dato: "{data?.articles[0].date.slice(8, 10)}/{data?.articles[0].date.slice(5, 7)}-{data?.articles[0].date.slice(0, 4)}" (dd/mm/yyyy)</label>
                        <input placeholder='Ny dato' className={style.inputField} onChange={(e) => setNewDate(e.target.value)} />
                        <label htmlFor="">Forfatter: "{data?.articles[0].author}"</label>
                        <input placeholder='Ny forfatter' className={style.inputField} onChange={(e) => setNewAuthor(e.target.value)} />
                        <label htmlFor="">Tekst</label>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue={data?.articles[0].content.html}
                            className={style.inputField}
                            init={{
                                height: 400,
                                menubar: false,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                ],
                                toolbar: 'undo redo | blocks | ' +
                                    'bold italic forecolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                        <button onChange={() => save()} className={style.inputSubmit}>Gem</button>
                        <label htmlFor="">Billede</label>
                        <input className={style.fileField} type='file'/>
                        <label htmlFor="">Kategori: "{data?.articles[0].category}"</label>
                        <input placeholder='Ny kategori' className={style.inputField} onChange={(e) => setNewCategory(e.target.value)} />
                        <input type="submit" value="Opdater artikel" className={style.inputSubmit} />
                    </form>
                </div>
            </div>
        </>
    )
}