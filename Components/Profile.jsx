import React from "react"
import { format } from "date-fns"

export default function Profile(props) {
    return (
        <>
            <article className="bg-gray-900 p-5 hover:border-blue-600 border border-gray-700 rounded shadow shadow-gray-700">
                <div className="flex items-center ">
                    <ul className="ml-5">
                        <li>
                            <h2 className="font-bold text-xl text-white">{props.owner.login}</h2>
                        </li>
                        <div>
                            <p className="mr-2 text-gray-300">{props.name}</p>
                            {props.private ? (
                                <p className="bg-red-700 py-1 px-2 rounded-lg shadow text-white text-xs inline-block opacity-75">
                                    Private
                                </p>
                            ) : (
                                <p className="bg-green-700 py-1 px-2 rounded-lg shadow text-white text-xs inline-block  mr-2">
                                    Public
                                </p>
                            )}
                        </div>
                    </ul>
                </div>

                <div>
                    <p className="mt-5 text-gray-400">
                        Repository Oluşturulma Tarihi{" "}
                        {format(new Date(props.created_at), "dd MMMM yyyy")} by{" "}
                        {props.owner.login}
                    </p>
                </div>

                <div className="mt-5 flex items-center justify-between text-right">
                    <a
                        className="underline text-sm text-blue-600"
                        href={props.html_url}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View Repo
                    </a>
                    <ul className="text-gray-300">
                        <li>{props.stargazers_count.toLocaleString()} stars</li>
                        <li>{props.watchers_count.toLocaleString()} Watchers</li>
                    </ul>
                </div>

                <div className="flex items-center justify-between flex-wrap mt-5">
                    <ul className="text-xs flex items-center justify-start">
                        <li className="py-1 px-2 text-white bg-green-700  rounded-lg shadow inline-block mr-2">
                            {props.language}
                        </li>

                        {props.topics &&
                            props.topics.map((topic, index) => (
                                <React.Fragment key={index}>
                                    <li className="py-1 px-2 text-white bg-emerald-700  rounded-lg shadow inline-block mr-2">
                                        {topic}
                                    </li>
                                </React.Fragment>
                            ))}
                    </ul>

                    <p className="text-red-400">{props.open_issues} issues</p>
                </div>
            </article>
        </>
    )
}