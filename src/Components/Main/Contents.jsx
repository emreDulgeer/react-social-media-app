import React, { useEffect, useState } from "react";
import {
  useFirebase,
  useFirebaseConnect,
  isLoaded,
  isEmpty,
} from "react-redux-firebase";
import { useSelector } from "react-redux";

const Contents = () => {
  useFirebaseConnect([{ path: "posts" }]);
  const firebase = useFirebase();
  const posts = useSelector((state) => state.firebase.ordered.posts);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (!mounted && !isEmpty(posts)) {
      setMounted(true);
    }
  }, [isLoaded(posts)]);

  if (!isLoaded(posts)) {
    return "Loading Posts...";
  }

  if (isEmpty(posts)) {
    return "No Posts";
  }

  return (
    <div>
      {posts.map(({ key, value }) => (
        <div className="card my-2" key={key}>
          <div className="card-body">
            <h5 className="card-title">Anonim</h5>
            <p className="card-text">{value.Content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contents;
