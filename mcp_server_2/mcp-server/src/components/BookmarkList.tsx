"use client";

import { Bookmark } from "@/types/bookmark";
import BookmarkCard from "./BookmarkCard";
import { BookmarkX } from 'lucide-react';

interface BookmarkListProps {
    bookmarks: Bookmark[];
    onDelete: (id : string) => void;
}

export default function BookmarkList({
    bookmarks,
    onDelete,
} : BookmarkListProps) {
    if(bookmarks.length === 0){
        return (
            <div className="empty-state">
                <div className="empty-icon"><BookmarkX /></div>
                <h3>No Bookmarks Yet</h3>
                <p className="empty-text">Add your first bookmark to get started</p>
            </div>
        );
    }

    return (
        <div>
            <div className="bookmark-grid">
                {
                    bookmarks.map((bookmark) => (
                        <BookmarkCard
                         key={bookmark.id}
                         bookmark={bookmark}
                         onDelete={onDelete}
                        />
                    ))
                }
            </div>
        </div>
    );
}