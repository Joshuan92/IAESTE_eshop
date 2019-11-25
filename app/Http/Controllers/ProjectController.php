<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Project;

class ProjectController extends Controller
{
    public function index () {

        $projectsQuery = Project::query();

        if($request->has("sort"))
        {
            $projects = $projectsQuery->orderBy("name", $request->input("sort"))->paginate($request->input("per_page"));
            
            return $projects;

        } else {
            $projects = $projectsQuery->orderBy("name", 'ASC')->paginate($request->input("per_page"), 36);
        
            return $projects;
        }
    }
}
