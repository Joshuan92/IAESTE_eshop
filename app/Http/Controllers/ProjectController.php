<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;

class ProjectController extends Controller
{
    public function index (Request $request)
    {

        $projectsQuery = Project::query();

        if($request->has("sort"))
        {
            $projectsQuery->orderBy("name", $request->input("sort"));
        } else {
            $$projectsQuery->orderBy("name", 'ASC');
    
        }

        return $projectsQuery->paginate($request->input("per_page", 6));
    }
}
